import { createSelector } from 'reselect';
import { Offer, Comment } from '@/types';
import { State } from '@/store/reducers/types';
import getTime from '@/utils/get-time';
import { mapOfferToClient, mapCommentToClient } from '@/store/selectors/adapter';


export const getLoadOffersStatus = (state: State) => state.offers.loadOffersStatus;
export const getLoginStatus = (state: State) => state.authorization.loginStatus;

export const getOffers = (state: State) => state.offers.offers;
export const getCitiesList = (state: State) => state.cities.cities;
export const getCurrentCity = (state: State) => state.cities.currentCity;
export const getAuthorizationStatus = (state: State) => state.authorization.authorization;
export const getUserEmail = (state: State) => state.userData.email;
export const getCommentsByOffer = (state: State) => state.comments.comments;
export const getNearbyOffers = (state: State) => state.nearbyOffers.nearbyOffers;

export const getMappedOffers = createSelector(
  getOffers,
  (offers) => offers.map(mapOfferToClient),
);

export const getFavoriteOffers = createSelector(
  getMappedOffers,
  (offers: Offer[]) => offers.filter(({ isFavorite }) => isFavorite),
);

export const getMappedNearbyOffers = createSelector(
  getNearbyOffers,
  (offers) => offers.map(mapOfferToClient),
);

export const getMappedComments = createSelector(
  getCommentsByOffer,
  (comments) => comments.map(mapCommentToClient),
);

export const getTenSortedComments = createSelector(
  getMappedComments,
  (mappedComments: Comment[]) => mappedComments
    .slice()
    .sort((a, b) => getTime(b.date) - getTime(a.date))
    .slice(0, 10),
);
