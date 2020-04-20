import { OfferRaw } from '@/api/types';
import { Status } from '@/store/reducers/common';
import {
  loadNearbyOffersPending,
  loadNearbyOffersResolve,
  loadNearbyOffersReject,
} from '@/store/actions/load-nearby-offers';
import {
  updateFavoriteStatusPending,
  updateFavoriteStatusResolve,
  updateFavoriteStatusReject,
} from '@/store/actions/update-favorite-status';

export interface NearbyOffersState {
  loadNearbyOffersStatus: Status,
  updateFavoriteStatus: Status,
  nearbyOffers: OfferRaw[],
}

export type NearbyOffersActions =
  | ReturnType<typeof loadNearbyOffersPending>
  | ReturnType<typeof loadNearbyOffersResolve>
  | ReturnType<typeof loadNearbyOffersReject>
  | ReturnType<typeof updateFavoriteStatusPending>
  | ReturnType<typeof updateFavoriteStatusResolve>
  | ReturnType<typeof updateFavoriteStatusReject>;
