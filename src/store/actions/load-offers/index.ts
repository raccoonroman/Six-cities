import LoadOffers from '@/store/actions/load-offers/types';
import { AsyncAction, createAction } from '@/store/actions/common';
import { OfferRaw } from '@/api/types';

export const loadOffersPending = () => createAction(LoadOffers.PENDING);
export const loadOffersResolve = (offers: OfferRaw[]) => createAction(LoadOffers.RESOLVE, offers);
export const loadOffersReject = () => createAction(LoadOffers.REJECT);


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
