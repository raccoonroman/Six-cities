import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizationStatus } from '@/const';
import Header from '@/components/header';


const mockStore = configureStore([]);

describe('Render <Header />', () => {
  it('when user is not authorized', () => {
    const store = mockStore({
      authorization: {
        authorization: AuthorizationStatus.NO_AUTH,
      },
      userData: {
        email: '',
      },
    });

    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('when user is authorized', () => {
    const store = mockStore({
      authorization: {
        authorization: AuthorizationStatus.AUTH,
      },
      userData: {
        email: 'name@gmail.com',
      },
    });

    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
