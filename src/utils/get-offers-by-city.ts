import { Offer } from '@/types';

export default (currentCity: string, offers: Offer[]) => offers
  .filter(({ city }) => currentCity === city.name);
