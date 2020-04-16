import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { requireAuthorization } from '@/store/actions';
import reducer from '@/store/reducers';
import { AuthorizationStatus } from '@/const';
import Api from '@/api';

const onUnauthorized = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = new Api(onUnauthorized);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

export default store;
