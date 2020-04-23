import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { getAuthorizationStatus } from '@/store/selectors';
import { AppRoute } from '@/const';
import isAuthorized from '@/utils/is-authorized';

interface Props extends RouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
  const { component: Component, exact, path } = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authorized = isAuthorized(authorizationStatus);

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorized ? <Component /> : <Redirect to={AppRoute.LOGIN} />
      )}
    />
  );
};

export default PrivateRoute;
