import { OfferRaw } from '@/api/types';
import { ActionType } from '@/const';

interface LoadOffersAction {
  type: typeof ActionType.LOAD_OFFERS
  payload: OfferRaw[]
}

interface UpdateOfferAction {
  type: typeof ActionType.UPDATE_OFFER
  payload: OfferRaw
}

interface SetEmailAction {
  type: typeof ActionType.SET_EMAIL
  payload: string
}

export type offersAction = LoadOffersAction | UpdateOfferAction;
export type userDataAction = SetEmailAction;
