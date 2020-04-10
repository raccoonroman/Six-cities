import { AuthorizationStatus } from '@/const';


export const getRatingStarsStyle = (rating) => ({ width: `${rating / 5 * 100}%` });

export const getCitiesByOffers = (offers) => {
  const cities = offers.map(({ city }) => city.name);
  return [...new Set(cities)];
};

export const getOffersByCity = (currentCity, offers) => offers.filter(({ city }) => currentCity === city.name);

export const getDistanceBetweenPoints = ([x1, y1], [x2, y2]) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

export const isAuthorized = (authorizationStatus) => authorizationStatus === AuthorizationStatus.AUTH;

export const updateOffers = (offers, newOffer) => {
  const { id: newOfferId } = newOffer;
  const i = offers.findIndex(({ id }) => id === newOfferId);
  if (i === -1) {
    return offers;
  }
  return [...offers.slice(0, i), newOffer, ...offers.slice(i + 1)];
};

export const getTime = (timestamp) => new Date(timestamp).getTime();
