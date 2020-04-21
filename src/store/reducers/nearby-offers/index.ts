import produce from 'immer';
import LoadNearbyOffers from '@/store/actions/load-nearby-offers/types';
import UpdateFavoriteStatus from '@/store/actions/update-favorite-status/types';
import { NearbyOffersState, NearbyOffersActions } from '@/store/reducers/nearby-offers/types';
import updateOffers from '@/utils/update-offers';
import neverReached from '@/utils/never-reached';

const InitialState: NearbyOffersState = {
  loadNearbyOffersStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  updateFavoriteStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  nearbyOffers: [],
};

export default (state = InitialState, action: NearbyOffersActions) => produce(state, (draft) => {
  switch (action.type) {
    case LoadNearbyOffers.PENDING: {
      draft.loadNearbyOffersStatus.pending = true;
      draft.loadNearbyOffersStatus.resolve = false;
      draft.loadNearbyOffersStatus.reject = false;
      break;
    }
    case LoadNearbyOffers.RESOLVE: {
      draft.loadNearbyOffersStatus.pending = false;
      draft.loadNearbyOffersStatus.resolve = true;
      draft.nearbyOffers = action.payload;
      break;
    }
    case LoadNearbyOffers.REJECT: {
      draft.loadNearbyOffersStatus.pending = false;
      draft.loadNearbyOffersStatus.reject = true;
      break;
    }
    case UpdateFavoriteStatus.PENDING: {
      draft.updateFavoriteStatus.pending = true;
      draft.updateFavoriteStatus.resolve = false;
      draft.updateFavoriteStatus.reject = false;
      break;
    }
    case UpdateFavoriteStatus.RESOLVE: {
      const newOffer = action.payload;
      draft.updateFavoriteStatus.pending = false;
      draft.updateFavoriteStatus.resolve = true;
      draft.nearbyOffers = updateOffers(draft.nearbyOffers, newOffer);
      break;
    }
    case UpdateFavoriteStatus.REJECT: {
      draft.updateFavoriteStatus.pending = false;
      draft.updateFavoriteStatus.reject = true;
      break;
    }
    default: {
      neverReached(action);
    }
  }
});
