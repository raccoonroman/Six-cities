import * as React from 'react';
import {Offer} from '../../types';
import {SortType, CardType} from '../../const';
import Sorting from '../../components/sorting';


const sortTypes = [
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

interface Props {
  history: object;
  offers: Offer[];
  currentCity: string;
  onCardHover: (offerId: number | null) => Function;
}

const withSorting = (Component) => {
  const WithSorting: React.FC<Props> = (props: Props) => {
    const {history, offers, currentCity, onCardHover} = props;
    const [sortType, setSortType] = React.useState(SortType.POPULAR);

    const handleSortTypeChange = (type) => setSortType(type);

    const getSortedOffers = () => {
      const {sort} = sortTypes.find(({name}) => sortType === name);
      return sort(offers);
    };

    return (
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} places to stay in {currentCity}
        </b>
        <Sorting
          sortBy={sortType}
          onSortTypeChange={handleSortTypeChange}
        />
        <Component
          history={history}
          className={`cities__places-list places__list`}
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
