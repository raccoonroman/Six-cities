import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus } from '@/const';
import App from '@/components/app';


const mockStore = configureStore([]);

const cities = ['Vinnytsia', 'Kyiv'];


it('Render <App />', () => {
  const store = mockStore({
    offers: {
      offers: [],
    },
    cities: {
      currentCity: cities[0],
      cities,
    },
    authorization: {
      authorization: AuthorizationStatus.NO_AUTH,
    },
    userData: {
      email: '',
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
