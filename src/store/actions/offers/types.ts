import { OfferRaw } from '@/api/types';

export enum LoadOffers {
  PENDING = 'LOAD_OFFERS/PENDING',
  RESOLVE = 'LOAD_OFFERS/RESOLVE',
  REJECT = 'LOAD_OFFERS/REJECT',
}

export enum UpdateOffer {
  PENDING = 'UPDATE_OFFER/PENDING',
  RESOLVE = 'UPDATE_OFFER/RESOLVE',
  REJECT = 'UPDATE_OFFER/REJECT',
}

export interface LoadOffersPending {
  type: typeof LoadOffers.PENDING;
}

export interface LoadOffersResolve {
  type: typeof LoadOffers.RESOLVE;
  payload: OfferRaw[];
}

export interface LoadOffersReject {
  type: typeof LoadOffers.REJECT;
}

export interface UpdateOfferPending {
  type: typeof UpdateOffer.PENDING;
}

export interface UpdateOfferResolve {
  type: typeof UpdateOffer.RESOLVE;
  payload: OfferRaw;
}

export interface UpdateOfferReject {
  type: typeof UpdateOffer.REJECT;
}
