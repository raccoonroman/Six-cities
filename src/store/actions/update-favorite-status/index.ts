import UpdateFavoriteStatus from '@/store/actions/update-favorite-status/types';
import { AsyncAction, createAction } from '@/store/actions/common';
import { OfferRaw } from '@/api/types';

export const updateFavoriteStatusPending = () => createAction(UpdateFavoriteStatus.PENDING);
export const updateFavoriteStatusReject = () => createAction(UpdateFavoriteStatus.REJECT);
export const updateFavoriteStatusResolve = (offer: OfferRaw) => {
  const action = createAction(UpdateFavoriteStatus.RESOLVE, offer);
  return action;
};

// eslint-disable-next-line max-len
export const updateFavoriteStatus = (offerId: number, status: number) : AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(updateFavoriteStatusPending());
    const offer = await api.setFavoriteStatus(offerId, status);
    dispatch(updateFavoriteStatusResolve(offer));
  } catch (err) {
    dispatch(updateFavoriteStatusReject());
    throw err;
  }
};
