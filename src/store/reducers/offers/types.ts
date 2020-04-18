import { OfferRaw } from '@/api/types';
import { Status } from '@/store/reducers/common';
import {
  loadOffersPending,
  loadOffersResolve,
  loadOffersReject,
  updateOfferPending,
  updateOfferResolve,
  updateOfferReject,
} from '@/store/actions/offers';

export interface OffersState {
  loadOffersStatus: Status,
  updateOfferStatus: Status,
  offers: OfferRaw[],
}

export type OffersActions =
  | ReturnType<typeof loadOffersPending>
  | ReturnType<typeof loadOffersResolve>
  | ReturnType<typeof loadOffersReject>
  | ReturnType<typeof updateOfferPending>
  | ReturnType<typeof updateOfferResolve>
  | ReturnType<typeof updateOfferReject>;
