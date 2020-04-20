/* eslint-disable no-param-reassign */
import produce from 'immer';
import Login from '@/store/actions/login/types';
import CheckAuth from '@/store/actions/check-auth/types';
import { AuthorizationState, AuthorizationActions } from '@/store/reducers/authorization/types';
import { AuthorizationStatus } from '@/const';

const initialState: AuthorizationState = {
  checkAuthStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  loginStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  authorization: AuthorizationStatus.NO_AUTH,
};


export default (state = initialState, action: AuthorizationActions) => produce(state, (draft) => {
  switch (action.type) {
    case CheckAuth.PENDING: {
      draft.checkAuthStatus.pending = true;
      draft.checkAuthStatus.resolve = false;
      draft.checkAuthStatus.reject = false;
      break;
    }
    case CheckAuth.RESOLVE: {
      draft.checkAuthStatus.pending = false;
      draft.checkAuthStatus.resolve = true;
      draft.authorization = AuthorizationStatus.AUTH;
      break;
    }
    case CheckAuth.REJECT: {
      draft.checkAuthStatus.pending = false;
      draft.checkAuthStatus.reject = true;
      draft.authorization = AuthorizationStatus.NO_AUTH;
      break;
    }
    case Login.PENDING: {
      draft.loginStatus.pending = true;
      draft.loginStatus.resolve = false;
      draft.loginStatus.reject = false;
      break;
    }
    case Login.RESOLVE: {
      draft.loginStatus.pending = false;
      draft.loginStatus.resolve = true;
      draft.authorization = AuthorizationStatus.AUTH;
      break;
    }
    case Login.REJECT: {
      draft.loginStatus.pending = false;
      draft.loginStatus.reject = true;
      break;
    }

    // skip default
  }
});
