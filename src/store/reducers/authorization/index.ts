import { AuthorizationStatus } from '@/const';
import ActionType from '@/store/actions/types';
import { InitialState, Action } from '@/store/reducers/authorization/types';

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};


const authorization = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION: {
      return { ...state, authorizationStatus: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default authorization;
