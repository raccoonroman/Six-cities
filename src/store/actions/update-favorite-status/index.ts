import UpdateFavoriteStatus from '@/store/actions/update-favorite-status/types';
import { AsyncAction, createAction } from '@/store/actions/common';
import { OfferRaw } from '@/api/types';

export const updateFavoriteStatusPending = () => createAction(UpdateFavoriteStatus.PENDING);
export const updateFavoriteStatusReject = () => createAction(UpdateFavoriteStatus.REJECT);
export const updateFavoriteStatusResolve = (offer: OfferRaw) => (
  createAction(UpdateFavoriteStatus.RESOLVE, offer));

export const updateFavoriteStatus = (offerId: number, status: number) : AsyncAction => (
  async (dispatch, _, api) => {
    try {
      dispatch(updateFavoriteStatusPending());
      const offer = await api.setFavoriteStatus(offerId, status);
      dispatch(updateFavoriteStatusResolve(offer));
    } catch (err) {
      dispatch(updateFavoriteStatusReject());
    }
  });
