import * as React from 'react';
import Header from '../header';
import withLoginFormState from '../../hocs/with-login-form-state';


interface Props {
  formState: {
    email: string;
    password: string;
  };
  onInputChange: (evt) => void;
  onFormSubmit: (evt) => void;
}

const SignIn: React.FC<Props> = (props: Props) => {
  const {formState, onInputChange, onFormSubmit} = props;
  const {email, password} = formState;

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={onFormSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  value={email}
                  onChange={onInputChange}
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
                  onChange={onInputChange}
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

export default withLoginFormState(SignIn);
