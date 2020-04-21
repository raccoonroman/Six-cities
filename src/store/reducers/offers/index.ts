import produce from 'immer';
import LoadOffers from '@/store/actions/load-offers/types';
import UpdateFavoriteStatus from '@/store/actions/update-favorite-status/types';
import { OffersState, OffersActions } from '@/store/reducers/offers/types';
import updateOffers from '@/utils/update-offers';
import neverReached from '@/utils/never-reached';

const InitialState: OffersState = {
  loadOffersStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  updateFavoriteStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  offers: [],
};

export default (state = InitialState, action: OffersActions) => produce(state, (draft) => {
  switch (action.type) {
    case LoadOffers.PENDING: {
      draft.loadOffersStatus.pending = true;
      draft.loadOffersStatus.resolve = false;
      draft.loadOffersStatus.reject = false;
      break;
    }
    case LoadOffers.RESOLVE: {
      draft.loadOffersStatus.pending = false;
      draft.loadOffersStatus.resolve = true;
      draft.offers = action.payload;
      break;
    }
    case LoadOffers.REJECT: {
      draft.loadOffersStatus.pending = false;
      draft.loadOffersStatus.reject = true;
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
      draft.offers = updateOffers(draft.offers, newOffer);
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
