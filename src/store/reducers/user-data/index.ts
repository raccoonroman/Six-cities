/* eslint-disable no-param-reassign */
import produce from 'immer';
import SetEmail from '@/store/actions/set-email/types';
import { UserDataState, UserDataActions } from '@/store/reducers/user-data/types';

const initialState: UserDataState = {
  status: {
    pending: false,
    resolve: false,
    reject: false,
  },
  email: '',
};

export default (state = initialState, action: UserDataActions) => produce(state, (draft) => {
  switch (action.type) {
    case SetEmail.PENDING: {
      draft.status.pending = true;
      draft.status.resolve = false;
      draft.status.reject = false;
      break;
    }
    case SetEmail.RESOLVE: {
      draft.status.pending = false;
      draft.status.resolve = true;
      draft.email = action.payload;
      break;
    }
    case SetEmail.REJECT: {
      draft.status.pending = false;
      draft.status.reject = true;
      break;
    }

    // skip default
  }
});
