import {
  LoadOffers,
  UpdateOffer,
  LoadOffersPending,
  LoadOffersResolve,
  LoadOffersReject,
  UpdateOfferPending,
  UpdateOfferResolve,
  UpdateOfferReject,
} from '@/store/actions/offers/types';
import { AsyncAction } from '@/store/actions/common';
import { OfferRaw } from '@/api/types';

export const loadOffersPending = (): LoadOffersPending => ({
  type: LoadOffers.PENDING,
});

export const loadOffersResolve = (offers: OfferRaw[]): LoadOffersResolve => ({
  type: LoadOffers.RESOLVE,
  payload: offers,
});

export const loadOffersReject = (): LoadOffersReject => ({
  type: LoadOffers.REJECT,
});

export const updateOfferPending = (): UpdateOfferPending => ({
  type: UpdateOffer.PENDING,
});

export const updateOfferResolve = (offer: OfferRaw): UpdateOfferResolve => ({
  type: UpdateOffer.RESOLVE,
  payload: offer,
});

export const updateOfferReject = (): UpdateOfferReject => ({
  type: UpdateOffer.REJECT,
});

export const loadOffers = (): AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(loadOffersPending());
    const offers = await api.loadOffers();
    dispatch(loadOffersResolve(offers));
  } catch (err) {
    dispatch(loadOffersReject());
    throw err;
  }
};

// eslint-disable-next-line max-len
export const setFavoriteStatus = (offerId: number, status: number) : AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(updateOfferPending());
    const offer = await api.setFavoriteStatus(offerId, status);
    dispatch(updateOfferResolve(offer));
  } catch (err) {
    dispatch(updateOfferReject());
    throw err;
  }
};
