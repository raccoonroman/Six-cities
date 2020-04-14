import ActionType from '@/store/actions/types';
import { OfferRaw } from '@/api/types';

export interface InitialState {
  currentCity: string;
  cities: string[];
}

interface LoadOffers {
  type: typeof ActionType.LOAD_OFFERS;
  payload: OfferRaw[];
}

interface SetCity {
  type: typeof ActionType.SET_CITY;
  payload: string;
}

export type Action = LoadOffers | SetCity;
