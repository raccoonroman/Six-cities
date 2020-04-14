import ActionType from '@/store/actions/types';
import { OfferRaw } from '@/api/types';

interface LoadNearbyOffers {
  type: typeof ActionType.LOAD_NEARBY_OFFERS;
  payload: OfferRaw[];
}

interface UpdateOffer {
  type: typeof ActionType.UPDATE_OFFER;
  payload: OfferRaw;
}

export type Action = LoadNearbyOffers | UpdateOffer;
