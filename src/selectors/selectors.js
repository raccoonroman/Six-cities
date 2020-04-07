import {createSelector} from 'reselect';
import {getTime} from '../utils';
import {mapOfferToClient, mapCommentToClient} from '../adapter';


export const getOffers = (state) => state.offers;
export const getCitiesList = (state) => state.cities.cities;
export const getCurrentCity = (state) => state.cities.currentCity;
export const getAuthorizationStatus = (state) => state.authorization.authorizationStatus;
export const getUserEmail = (state) => state.userData.email;
export const getCommentsByOffer = (state) => state.commentsByOffer;
export const getNearbyOffers = (state) => state.nearbyOffers;

export const getMappedOffers = createSelector(
    getOffers,
    (offers) => offers.map(mapOfferToClient)
);

export const getFavoriteOffers = createSelector(
    getMappedOffers,
    (offers) => offers.filter(({isFavorite}) => isFavorite)
);

export const getMappedNearbyOffers = createSelector(
    getNearbyOffers,
    (offers) => offers.map(mapOfferToClient)
);

export const getMappedComments = createSelector(
    getCommentsByOffer,
    (comments) => comments.map(mapCommentToClient)
);

export const getTenSortedComments = createSelector(
    getMappedComments,
    (mappedComments) => mappedComments
      .slice()
      .sort((a, b) => getTime(b.date) - getTime(a.date))
      .slice(0, 10)
);
