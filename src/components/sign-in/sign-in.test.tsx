import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Route} from 'react-router-dom';
import {AuthorizationStatus, AppRoute} from '../../const';
import SignIn from './sign-in';


const mockStore = configureStore([]);

it(`Render <SignIn />`, () => {
  const store = mockStore({
    authorization: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    userData: {
      email: ``,
    },
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path={AppRoute.LOGIN} render={({history}) => (
            <SignIn history={history} />
          )} />
        </BrowserRouter>
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
