import { AuthorizationStatus } from '@/const';


export const getRatingStarsStyle = (rating) => ({ width: `${(rating / 5) * 100}%` });

export const getCitiesByOffers = (offers) => {
  const cities = offers.map(({ city }) => city.name);
  return [...new Set(cities)];
};

export const getOffersByCity = (currentCity, offers) => offers
  .filter(({ city }) => currentCity === city.name);

export const isAuthorized = (authorizationStatus) => {
  const authorized = AuthorizationStatus.AUTH;
  return authorizationStatus === authorized;
};

export const updateOffers = (offers, newOffer) => {
  const { id: newOfferId } = newOffer;
  const i = offers.findIndex(({ id }) => id === newOfferId);
  if (i === -1) {
    return offers;
  }
  return [...offers.slice(0, i), newOffer, ...offers.slice(i + 1)];
};

export const getTime = (timestamp) => new Date(timestamp).getTime();
