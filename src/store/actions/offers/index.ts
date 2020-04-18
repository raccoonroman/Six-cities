import { LoadOffers, UpdateOffer } from '@/store/actions/offers/types';
import { AsyncAction, createAction } from '@/store/actions/common';
import { OfferRaw } from '@/api/types';

export const loadOffersPending = () => createAction(LoadOffers.PENDING);
export const loadOffersResolve = (offers: OfferRaw[]) => createAction(LoadOffers.RESOLVE, offers);
export const loadOffersReject = () => createAction(LoadOffers.REJECT);

export const updateOfferPending = () => createAction(UpdateOffer.PENDING);
export const updateOfferResolve = (offer: OfferRaw) => createAction(UpdateOffer.RESOLVE, offer);
export const updateOfferReject = () => createAction(UpdateOffer.REJECT);


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
