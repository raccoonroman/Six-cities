import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadOffers } from '@/store/actions/load-offers';
import { checkAuth } from '@/store/actions/check-auth';
import { AppRoute } from '@/const';
import PrivateRoute from '@/components/private-route';
import Main from '@/components/main';
import SignIn from '@/components/sign-in';
import OfferDetails from '@/components/offer-details';
import Favorites from '@/components/favorites';

const App: React.FC = () => {
  const dispatch = useDispatch();

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
          component={SignIn}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          component={Favorites}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
