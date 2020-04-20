import { OfferRaw } from '@/api/types';
import { Status } from '@/store/reducers/common';
import {
  loadOffersPending,
  loadOffersResolve,
  loadOffersReject,
} from '@/store/actions/load-offers';
import {
  updateFavoriteStatusPending,
  updateFavoriteStatusResolve,
  updateFavoriteStatusReject,
} from '@/store/actions/update-favorite-status';

export interface OffersState {
  loadOffersStatus: Status,
  updateFavoriteStatus: Status,
  offers: OfferRaw[],
}

export type OffersActions =
  | ReturnType<typeof loadOffersPending>
  | ReturnType<typeof loadOffersResolve>
  | ReturnType<typeof loadOffersReject>
  | ReturnType<typeof updateFavoriteStatusPending>
  | ReturnType<typeof updateFavoriteStatusResolve>
  | ReturnType<typeof updateFavoriteStatusReject>;
