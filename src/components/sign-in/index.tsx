import * as React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import * as operations from '../../operations';
import Header from '../header';


type Props = RouteComponentProps & {
  login: (authData: object, goToPreviousPage: Function) => void;
}

const SignIn: React.FC<Props> = (props: Props) => {
  const {history, login} = props;
  const [formState, setFormState] = React.useState({
    email: ``,
    password: ``,
  });

  const {email, password} = formState;

  const goToPreviousPage = () => history.goBack();

  const handleInputChange = ({target}) => {
    setFormState(Object.assign({}, formState, {
      [target.name]: target.value,
    }));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    login({login: email, password}, goToPreviousPage);
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleFormSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  value={email}
                  onChange={handleInputChange}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  value={password}
                  onChange={handleInputChange}
                  className="login__input form__input"
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

const mapDispatchToProps = (dispatch) => ({
  login(authData, goToPreviousPage) {
    dispatch(operations.login(authData, goToPreviousPage));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
