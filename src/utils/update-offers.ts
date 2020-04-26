import { OfferRaw } from '@/api/types';

export default (offers: OfferRaw[], newOffer: OfferRaw) => (
  offers.map((offer) => {
    if (offer.id === newOffer.id) {
      return newOffer;
    }

    return offer;
  })
);
