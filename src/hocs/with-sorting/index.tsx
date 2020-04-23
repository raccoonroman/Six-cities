import React from 'react';
import { Offer } from '@/types';
import { SortType, CardType } from '@/const';
import Sorting from '@/components/sorting';


interface SortMode {
  name: string;
  sort: (offers: Offer[]) => Offer[];
}

const sortModes: SortMode[] = [
  {
    name: SortType.POPULAR,
    sort: (offers) => offers,
  },
  {
    name: SortType.PRICE_LOW_TO_HIGH,
    sort: (offers) => offers.slice().sort((a, b) => a.price - b.price),
  },
  {
    name: SortType.PRICE_HIGH_TO_LOW,
    sort: (offers) => offers.slice().sort((a, b) => b.price - a.price),
  },
  {
    name: SortType.TOP_RATED_FIRST,
    sort: (offers) => offers.slice().sort((a, b) => b.rating - a.rating),
  },
];

interface CommonProps {
  offers: Offer[];
  onCardHover?: (offerId: number | null) => (event: React.MouseEvent) => void;
}

interface Props extends CommonProps {
  currentCity: string;
}

interface ComponentProps extends CommonProps {
  className: string;
  cardsType: string;
}

const withSorting = (Component: React.FC<ComponentProps>) => {
  const WithSorting: React.FC<Props> = (props: Props) => {
    const {
      offers, currentCity, onCardHover,
    } = props;
    const [sortMode, setSortMode] = React.useState<string>(SortType.POPULAR);

    const handleSortTypeChange = (type: string) => setSortMode(type);

    const getSortedOffers = () => {
      const foundSortMode = sortModes.find(({ name }) => sortMode === name);
      return foundSortMode!.sort(offers);
    };

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length}
          {' '}
          places to stay in
          {' '}
          {currentCity}
        </b>
        <Sorting
          sortBy={sortMode}
          onSortTypeChange={handleSortTypeChange}
        />
        <Component
          className="cities__places-list places__list"
          cardsType={CardType.CITY}
          offers={getSortedOffers()}
          onCardHover={onCardHover}
        />
      </section>
    );
  };

  return WithSorting;
};


export default withSorting;
