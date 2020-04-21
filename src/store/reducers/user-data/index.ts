import produce from 'immer';
import Login from '@/store/actions/login/types';
import CheckAuth from '@/store/actions/check-auth/types';
import { UserDataState, UserDataActions } from '@/store/reducers/user-data/types';
import neverReached from '@/utils/never-reached';

const initialState: UserDataState = {
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
  email: '',
};

export default (state = initialState, action: UserDataActions) => produce(state, (draft) => {
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
      draft.email = action.payload.email;
      break;
    }
    case CheckAuth.REJECT: {
      draft.checkAuthStatus.pending = false;
      draft.checkAuthStatus.reject = true;
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
      draft.email = action.payload.email;
      break;
    }
    case Login.REJECT: {
      draft.loginStatus.pending = false;
      draft.loginStatus.reject = true;
      break;
    }
    default: {
      neverReached(action);
    }
  }
});
