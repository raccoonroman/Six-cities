import ActionType from '@/store/actions/types';
import { Action } from '@/store/reducers/comments-by-offer/types';


const commentsByOffer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default commentsByOffer;
