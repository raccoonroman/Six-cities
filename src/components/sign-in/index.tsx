import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { getAuthorizationStatus } from '@/store/selectors';
import { login } from '@/store/actions/login';
import { AppRoute } from '@/const';
import isAuthorized from '@/utils/is-authorized';
import Header from '@/components/header';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authorized = isAuthorized(authorizationStatus);

  const [formState, setFormState] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = formState;

  const goToPreviousPage = () => history.goBack();

  const handleInputChange = ({ target }: ChangeEvent) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const authData = { email, password };
    dispatch(login(authData, goToPreviousPage));
  };

  if (authorized) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleFormSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="login-email" className="visually-hidden">E-mail</label>
                <input
                  value={email}
                  onChange={handleInputChange}
                  className="login__input form__input"
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label htmlFor="login-password" className="visually-hidden">Password</label>
                <input
                  value={password}
                  onChange={handleInputChange}
                  className="login__input form__input"
                  id="login-password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
