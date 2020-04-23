import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { getAuthorizationStatus } from '@/store/selectors';
import { AppRoute } from '@/const';
import isAuthorized from '@/utils/is-authorized';

interface Props extends RouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<Props> = (props) => {
  const { component, exact, path } = props;
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authorized = isAuthorized(authorizationStatus);

  if (!authorized) {
    return <Redirect to={AppRoute.LOGIN} />;
  }

  return (
    <Route
      exact={exact}
      path={path}
      component={component}
    />
  );
};

export default PrivateRoute;
