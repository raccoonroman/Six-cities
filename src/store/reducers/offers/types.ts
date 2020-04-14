import ActionType from '@/store/actions/types';
import { OfferRaw } from '@/api/types';

interface LoadOffers {
  type: typeof ActionType.LOAD_OFFERS;
  payload: OfferRaw[];
}

interface UpdateOffer {
  type: typeof ActionType.UPDATE_OFFER;
  payload: OfferRaw;
}

export type Action = LoadOffers | UpdateOffer;
