import * as Action from '@/store/actions/offers/types';
import { OfferRaw } from '@/api/types';

export interface OffersState {
  loadOffersStatus: {
    pending: boolean,
    resolve: boolean,
    reject: boolean,
  },
  updateOfferStatus: {
    pending: boolean,
    resolve: boolean,
    reject: boolean,
  },
  offers: OfferRaw[],
}

export type OffersActions =
  | Action.LoadOffersPending
  | Action.LoadOffersResolve
  | Action.LoadOffersReject
  | Action.UpdateOfferPending
  | Action.UpdateOfferResolve
  | Action.UpdateOfferReject;
