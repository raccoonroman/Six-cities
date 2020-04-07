import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';
import cn from 'classnames';
import {Offer} from '../../types';
import {CardType, AppRoute} from '../../const';
import {getRatingStarsStyle, isAuthorized} from '../../utils';
import * as operations from '../../operations/operations';
import {getMappedOffers, getMappedNearbyOffers, getAuthorizationStatus} from '../../selectors/selectors';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';


const MAX_IMAGES = 6;

type Props = RouteComponentProps<{ id: string }> & {
  authorizationStatus: string;
  offers: Offer[];
  nearbyOffers: Offer[];
  loadComments: (offerId: number) => void;
  loadNearbyOffers: (offerId: number) => void;
  setFavoriteStatus: (offerId: number, status: number) => void;
}

class OfferDetails extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);
    this._handleBookmarkButtonClick = this._handleBookmarkButtonClick.bind(this);
  }

  componentDidMount() {
    this._loadComments();
    this._loadNearbyOffers();
  }

  componentDidUpdate({match: prevMatch}) {
    const {match} = this.props;

    if (prevMatch.params.id !== match.params.id) {
      this._loadComments();
      this._loadNearbyOffers();
    }
  }

  _loadComments() {
    const {match, loadComments} = this.props;
    const {id} = match.params;
    loadComments(+id);
  }

  _loadNearbyOffers() {
    const {match, loadNearbyOffers} = this.props;
    const {id} = match.params;
    loadNearbyOffers(+id);
  }

  _handleBookmarkButtonClick() {
    const {history, authorizationStatus, setFavoriteStatus} = this.props;
    const authorized = isAuthorized(authorizationStatus);
    const currentOffer = this._getCurrentOffer();
    const {id, isFavorite} = currentOffer;

    if (!authorized) {
      history.push(AppRoute.LOGIN);
    } else {
      const status = +(!isFavorite);
      setFavoriteStatus(id, status);
    }
  }

  _getCurrentOffer() {
    const {match, offers} = this.props;
    const {id: currentId} = match.params;
    return offers.find(({id}) => id === +currentId);
  }

  _getNearbyOffersTitleText(nearbyOffersLength) {
    if (nearbyOffersLength) {
      return `Other places in the neighbourhood`;
    }
    return `There is no other places in the neighbourhood`;
  }

  render() {
    const {history, nearbyOffers} = this.props;
    const currentOffer = this._getCurrentOffer();
    if (!currentOffer) {
      return null;
    }

    const {
      id,
      title,
      price,
      rating,
      type,
      bedrooms,
      maxAdults,
      isFavorite,
      isPremium,
      description,
      goods,
      hostAvatarUrl,
      hostIsPro,
      hostName,
      images,
    } = currentOffer;

    const bookmarkButtonClass = cn({
      'property__bookmark-button button': true,
      'property__bookmark-button--active': isFavorite,
    });

    const hostAvatarWrapperClass = cn({
      'property__avatar-wrapper user__avatar-wrapper': true,
      'property__avatar-wrapper--pro': hostIsPro,
    });

    return (
      <div className="page">
        <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, MAX_IMAGES).map((img) => (
                  <div key={img + id} className="property__image-wrapper">
                    <img className="property__image" src={img} alt={title} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>)}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button onClick={this._handleBookmarkButtonClick} className={bookmarkButtonClass} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={getRatingStarsStyle(rating)}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => (
                      <li key={good + id} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={hostAvatarWrapperClass}>
                      <img
                        className="property__avatar user__avatar"
                        src={`/${hostAvatarUrl}`}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{hostName}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">{description}</p>
                  </div>
                </div>
                <Reviews offerId={id} />
              </div>
            </div>
            <Map
              className="property__map map"
              offers={[...nearbyOffers, currentOffer]}
              currentOfferId={id}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                {this._getNearbyOffersTitleText(nearbyOffers.length)}
              </h2>
              <OffersList
                history={history}
                className={`near-places__list places__list`}
                cardsType={CardType.NEAR}
                offers={nearbyOffers}
              />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  offers: getMappedOffers(state),
  nearbyOffers: getMappedNearbyOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(offerId) {
    dispatch(operations.loadComments(offerId));
  },
  loadNearbyOffers(offerId) {
    dispatch(operations.loadNearbyOffers(offerId));
  },
  setFavoriteStatus(offerId, status) {
    dispatch(operations.setFavoriteStatus(offerId, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
