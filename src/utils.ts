import { AuthorizationStatus } from '@/const';
import { Offer } from '@/types';
import { OfferRaw } from '@/api/types';


export const getRatingStarsStyle = (rating: number) => ({ width: `${(rating / 5) * 100}%` });

export const getCitiesByRawOffers = (rawOffers: OfferRaw[]) => {
  const cities = rawOffers.map(({ city }) => city.name);
  return [...new Set(cities)];
};

export const getCitiesByOffers = (offers: Offer[]) => {
  const cities = offers.map(({ city }) => city.name);
  return [...new Set(cities)];
};

export const getOffersByCity = (currentCity: string, offers: Offer[]) => offers
  .filter(({ city }) => currentCity === city.name);

export const isAuthorized = (authorizationStatus: string) => {
  const authorized = AuthorizationStatus.AUTH;
  return authorizationStatus === authorized;
};

export const updateOffers = (offers: OfferRaw[], newOffer: OfferRaw) => {
  const { id: newOfferId } = newOffer;
  const i = offers.findIndex(({ id }) => id === newOfferId);
  if (i === -1) {
    return offers;
  }
  return [...offers.slice(0, i), newOffer, ...offers.slice(i + 1)];
};

export const getTime = (timestamp: string) => new Date(timestamp).getTime();
