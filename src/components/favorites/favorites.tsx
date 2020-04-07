import * as React from 'react';
import cn from 'classnames';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Offer} from '../../types';
import {CardType, AppRoute} from '../../const';
import {getCitiesByOffers, getOffersByCity} from '../../utils';
import {getFavoriteOffers} from '../../selectors/selectors';
import {setCity} from '../../actions/actions';
import Header from '../header/header';
import OffersList from '../offers-list/offers-list';


interface Props {
  favoriteOffers: Offer[];
  onCityChange: (cityName: string) => object;
}

const Favorites: React.FC<Props> = (props: Props) => {
  const {favoriteOffers, onCityChange} = props;
  const noFavorites = !favoriteOffers.length;
  const cities = getCitiesByOffers(favoriteOffers);

  const handleCityNameClick = (city) => () => {
    onCityChange(city);
  };

  const renderCities = () => {
    return cities.map((city) => {
      const offersByCity = getOffersByCity(city, favoriteOffers);

      return (
        <li key={`${city}-favorites`} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link onClick={handleCityNameClick(city)} to={AppRoute.ROOT} className="locations__item-link">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <OffersList
            className={`favorites__places`}
            cardsType={CardType.FAVORITE}
            offers={offersByCity}
          />
        </li>
      );
    });
  };

  const renderFavorites = () => {
    if (noFavorites) {
      return (
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
          </div>
        </section>
      );
    }

    return (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">{renderCities()}</ul>
      </section>
    );
  };

  const pageFavoritesClass = cn({
    'page': true,
    'page--favorites-empty': noFavorites,
  });
  const mainFavoritesClass = cn({
    'page__main page__main--favorites': true,
    'page__main--favorites-empty': noFavorites,
  });

  return (
    <div className={pageFavoritesClass}>
      <Header />

      <main className={mainFavoritesClass}>
        <div className="page__favorites-container container">
          {renderFavorites()}
        </div>
      </main>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteOffers: getFavoriteOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(cityName) {
    dispatch(setCity(cityName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
