import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { MapType } from '@/const';
import getOffersByCity from '@/utils/get-offers-by-city';
import withSorting from '@/hocs/with-sorting';
import { getCurrentCity, getMappedOffers } from '@/store/selectors';
import Header from '@/components/header';
import CitiesList from '@/components/cities-list';
import OffersList from '@/components/offers-list';
import Map from '@/components/map';


const OffersListWithSorting = withSorting(OffersList);

const Main: React.FC = () => {
  const currentCity = useSelector(getCurrentCity);
  const offers = useSelector(getMappedOffers);

  const offersByCity = getOffersByCity(currentCity, offers);

  const [hoveredCardId, setHoveredCardId] = useState<null | number>(null);

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
        offers={offersByCity}
        currentCity={currentCity}
        onCardHover={handleOfferCardHover}
      />
    );
  };

  const mainClass = cn('page__main page__main--index', {
    'page__main--index-empty': offersByCity.length === 0,
  });

  const offersContainerClass = cn('cities__places-container container', {
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
