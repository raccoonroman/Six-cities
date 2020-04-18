/* eslint-disable no-param-reassign */
import produce from 'immer';
import LoadOffers from '@/store/actions/load-offers/types';
import UpdateOffer from '@/store/actions/update-offer/types';
import { OffersState, OffersActions } from '@/store/reducers/offers/types';
import { updateOffers } from '@/utils';


const InitialState: OffersState = {
  loadOffersStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  updateOfferStatus: {
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
    case UpdateOffer.PENDING: {
      draft.updateOfferStatus.pending = true;
      draft.updateOfferStatus.resolve = false;
      draft.updateOfferStatus.reject = false;
      break;
    }
    case UpdateOffer.RESOLVE: {
      const newOffer = action.payload;
      draft.updateOfferStatus.pending = false;
      draft.updateOfferStatus.resolve = true;
      draft.offers = updateOffers(draft.offers, newOffer);
      break;
    }
    case UpdateOffer.REJECT: {
      draft.updateOfferStatus.pending = false;
      draft.updateOfferStatus.reject = true;
      break;
    }

    // skip default
  }
});
