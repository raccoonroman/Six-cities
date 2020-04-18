import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '@/components/app';
import store from '@/store';
import { loadOffers } from '@/store/actions/load-offers';
import { checkAuth } from '@/operations';

store.dispatch(loadOffers());
store.dispatch(checkAuth());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
