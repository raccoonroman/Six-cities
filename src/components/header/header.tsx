import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {isAuthorized} from '../../utils';
import {getUserEmail, getAuthorizationStatus} from '../../selectors/selectors';


interface Props {
  authorizationStatus: string;
  email: string;
}

const Header: React.FC<Props> = (props: Props) => {
  const {authorizationStatus, email} = props;

  const renderLoginText = () => {
    if (!isAuthorized(authorizationStatus)) {
      return <span className="header__login">Sign in</span>;
    }
    return (
      <span className="header__user-name user__name">
        {email}
      </span>
    );
  };

  const userHref = isAuthorized(authorizationStatus) ? AppRoute.FAVORITES : AppRoute.LOGIN;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className="header__logo-link">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={userHref} className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {renderLoginText()}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  email: getUserEmail(state),
});

export default connect(mapStateToProps)(Header);
