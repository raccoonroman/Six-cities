import { OfferRaw } from '@/api/types';

export default (offers: OfferRaw[], newOffer: OfferRaw) => {
  const { id: newOfferId } = newOffer;
  const i = offers.findIndex(({ id }) => id === newOfferId);
  if (i === -1) {
    return offers;
  }
  return [...offers.slice(0, i), newOffer, ...offers.slice(i + 1)];
};
