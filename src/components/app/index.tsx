import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoute } from '@/const';
import { isAuthorized } from '@/utils';
import { getAuthorizationStatus } from '@/selectors';
import Main from '@/components/main';
import SignIn from '@/components/sign-in';
import OfferDetails from '@/components/offer-details';
import Favorites from '@/components/favorites';


const App: React.FC = () => {
  const authorizationStatus: string = useSelector(getAuthorizationStatus);
  const authorized: boolean = isAuthorized(authorizationStatus);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={({ history }) => (
            <Main history={history} />
          )}
        />
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          render={({ history, match }) => (
            <OfferDetails history={history} match={match} />
          )}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={({ history }) => (
            !authorized ? <SignIn history={history} /> : <Redirect to={AppRoute.ROOT} />
          )}
        />
        <Route
          exact
          path={AppRoute.FAVORITES}
          render={() => (
            authorized ? <Favorites /> : <Redirect to={AppRoute.LOGIN} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
