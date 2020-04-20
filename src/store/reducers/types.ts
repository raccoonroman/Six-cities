import { OffersState, OffersActions } from '@/store/reducers/offers/types';
import { UserDataState, UserDataActions } from '@/store/reducers/user-data/types';

export interface State {
  offers: OffersState;
  userData: UserDataState;
}

export type Actions =
  | OffersActions
  | UserDataActions;
