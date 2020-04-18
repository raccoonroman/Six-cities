import UpdateOffer from '@/store/actions/update-offer/types';
import { AsyncAction, createAction } from '@/store/actions/common';
import { OfferRaw } from '@/api/types';

export const updateOfferPending = () => createAction(UpdateOffer.PENDING);
export const updateOfferResolve = (offer: OfferRaw) => createAction(UpdateOffer.RESOLVE, offer);
export const updateOfferReject = () => createAction(UpdateOffer.REJECT);

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
