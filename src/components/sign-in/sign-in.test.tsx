import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizationStatus } from '@/const';
import SignIn from '@/components/sign-in';


const mockStore = configureStore([]);

it('Render <SignIn />', () => {
  const store = mockStore({
    authorization: {
      loginStatus: {
        pending: false,
        resolve: false,
        reject: false,
      },
      authorization: AuthorizationStatus.NO_AUTH,
    },
    userData: {
      email: '',
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
