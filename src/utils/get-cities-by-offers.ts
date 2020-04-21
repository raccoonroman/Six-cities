import { Offer } from '@/types';

export default (offers: Offer[]) => {
  const cities = offers.map(({ city }) => city.name);
  return [...new Set(cities)];
};
