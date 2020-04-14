import ActionType from '@/store/actions/types';
import { Action } from '@/store/reducers/nearby-offers/types';
import { updateOffers } from '@/utils';


const nearbyOffers = (state = [], action: Action) => {
  switch (action.type) {
    case ActionType.LOAD_NEARBY_OFFERS: {
      return action.payload;
    }
    case ActionType.UPDATE_OFFER: {
      const newOffer = action.payload;
      const updatedOffers = updateOffers(state, newOffer);
      return updatedOffers;
    }
    default: {
      return state;
    }
  }
};

export default nearbyOffers;
