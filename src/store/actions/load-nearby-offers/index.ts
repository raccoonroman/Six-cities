import LoadNearbyOffers from '@/store/actions/load-nearby-offers/types';
import { AsyncAction, createAction } from '@/store/actions/common';
import { OfferRaw } from '@/api/types';

export const loadNearbyOffersPending = () => createAction(LoadNearbyOffers.PENDING);
// eslint-disable-next-line max-len
export const loadNearbyOffersResolve = (offers: OfferRaw[]) => createAction(LoadNearbyOffers.RESOLVE, offers);
export const loadNearbyOffersReject = () => createAction(LoadNearbyOffers.REJECT);

export const loadNearbyOffers = (offerId: number): AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(loadNearbyOffersPending());
    const nearbyOffers = await api.loadNearbyOffers(offerId);
    dispatch(loadNearbyOffersResolve(nearbyOffers));
  } catch (err) {
    dispatch(loadNearbyOffersReject());
    throw err;
  }
};
