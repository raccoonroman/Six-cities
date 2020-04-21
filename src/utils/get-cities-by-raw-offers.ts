import { OfferRaw } from '@/api/types';

export default (rawOffers: OfferRaw[]) => {
  const cities = rawOffers.map(({ city }) => city.name);
  return [...new Set(cities)];
};
