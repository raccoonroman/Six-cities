import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Offer } from '@/types';
import { MapType } from '@/const';
import { getOffersByCity } from '@/utils';
import withSorting from '@/hocs/with-sorting';
import { getCurrentCity, getMappedOffers } from '@/selectors';
import Header from '@/components/header';
import CitiesList from '@/components/cities-list';
import OffersList from '@/components/offers-list';
import Map from '@/components/map';


interface Props {
  history?: { push: Function };
}

const OffersListWithSorting = withSorting(OffersList);

const Main: React.FC<Props> = (props: Props) => {
  const { history } = props;
  const currentCity: string = useSelector(getCurrentCity);
  const offers: Offer[] = useSelector(getMappedOffers);

  const offersByCity = getOffersByCity(currentCity, offers);

  const [hoveredCardId, setHoveredCardId] = React.useState<null | number>(null);

  const handleOfferCardHover = (id: number | null) => () => setHoveredCardId(id);

  const renderOffersList = () => {
    if (!offersByCity.length) {
      return (
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">
              We could not find any property available at the moment in
              {' '}
              {currentCity}
            </p>
          </div>
        </section>
      );
    }

    return (
      <OffersListWithSorting
        history={history}
        offers={offersByCity}
        currentCity={currentCity}
        onCardHover={handleOfferCardHover}
      />
    );
  };

  const mainClass = cn({
    'page__main page__main--index': true,
    'page__main--index-empty': offersByCity.length === 0,
  });

  const offersContainerClass = cn({
    'cities__places-container container': true,
    'cities__places-container--empty': offersByCity.length === 0,
  });

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList currentCity={currentCity} />
          </section>
        </div>
        <div className="cities">
          <div className={offersContainerClass}>
            {renderOffersList()}

            <div className="cities__right-section">
              {!!offersByCity.length && (
                <Map
                  mapType={MapType.HOVERED_ACTIVE_OFFER}
                  offers={offersByCity}
                  currentOfferId={hoveredCardId}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
