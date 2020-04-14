import ActionType from '@/store/actions/types';
import { InitialState, Action } from '@/store/reducers/user-data/types';

const initialState: InitialState = {
  email: '',
};

const userData = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_EMAIL: {
      return { ...state, email: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default userData;
