import { AuthorizationState, AuthorizationActions } from '@/store/reducers/authorization/types';
import { OffersState, OffersActions } from '@/store/reducers/offers/types';
import { CitiesState, CitiesActions } from '@/store/reducers/cities/types';
import { UserDataState, UserDataActions } from '@/store/reducers/user-data/types';
import { NearbyOffersState, NearbyOffersActions } from '@/store/reducers/nearby-offers/types';
import { CommentsState, CommentsActions } from '@/store/reducers/comments/types';

export interface State {
  authorization: AuthorizationState;
  offers: OffersState;
  cities: CitiesState;
  userData: UserDataState;
  nearbyOffers: NearbyOffersState;
  comments: CommentsState;
}

export type Actions =
  | AuthorizationActions
  | OffersActions
  | CitiesActions
  | UserDataActions
  | NearbyOffersActions
  | CommentsActions;
