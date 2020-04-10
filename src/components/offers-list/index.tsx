import * as React from 'react';
import { Offer } from '@/types';
import OfferCard from '@/components/offer-card';


interface Props {
  history?: object;
  className: string;
  cardsType: string;
  offers: Offer[];
  onCardHover?: (offerId: number | null) => Function;
}

const OffersList: React.FC<Props> = (props: Props) => {
  const {
    history, className, cardsType, offers, onCardHover,
  } = props;

  return (
    <div className={className}>
      {offers.map((offer) => {
        const { id } = offer;
        return (
          <OfferCard
            key={id}
            history={history}
            cardType={cardsType}
            offer={offer}
            onCardHover={onCardHover}
          />
        );
      })}
    </div>
  );
};


export default OffersList;
