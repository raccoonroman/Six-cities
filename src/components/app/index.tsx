import React, { useEffect } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadOffers } from '@/store/actions/load-offers';
import { checkAuth } from '@/store/actions/check-auth';
import { AppRoute } from '@/const';
import isAuthorized from '@/utils/is-authorized';
import { getAuthorizationStatus } from '@/store/selectors';
import Main from '@/components/main';
import SignIn from '@/components/sign-in';
import OfferDetails from '@/components/offer-details';
import Favorites from '@/components/favorites';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authorized = isAuthorized(authorizationStatus);

  useEffect(() => {
    dispatch(loadOffers());
    dispatch(checkAuth());
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          component={Main}
        />
        <Route
          exact
          path={`${AppRoute.OFFER}/:id`}
          component={OfferDetails}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          render={() => (
            !authorized ? <SignIn /> : <Redirect to={AppRoute.ROOT} />
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
