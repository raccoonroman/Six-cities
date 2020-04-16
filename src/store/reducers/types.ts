import { OffersState, OffersActions } from '@/store/reducers/offers/types';

export interface State {
  offers: OffersState;
}

export type Actions = OffersActions;
