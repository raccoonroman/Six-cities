import { Status } from '@/store/reducers/common';
import {
  loadOffersPending,
  loadOffersResolve,
  loadOffersReject,
} from '@/store/actions/load-offers';
import setCity from '@/store/actions/set-city';

export interface CitiesState {
  loadOffersStatus: Status,
  currentCity: string;
  cities: string[];
}

export type CitiesActions =
  | ReturnType<typeof loadOffersPending>
  | ReturnType<typeof loadOffersResolve>
  | ReturnType<typeof loadOffersReject>
  | ReturnType<typeof setCity>;
