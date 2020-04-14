import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { requireAuthorization } from '@/store/actions';
import reducers from '@/store/reducers';
import { loadOffers, checkAuth } from '@/operations';
import { AuthorizationStatus } from '@/const';
import Api from '@/api';

const onUnauthorized = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = new Api(onUnauthorized);

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(loadOffers());
store.dispatch(checkAuth());

export default store;
