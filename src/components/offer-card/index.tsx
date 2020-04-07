import * as React from 'react';
import cn from 'classnames';
import {connect} from 'react-redux';
import {Link, RouteComponentProps} from 'react-router-dom';
import {Offer} from '../../types';
import {CardType, AppRoute} from '../../const';
import {getRatingStarsStyle, isAuthorized} from '../../utils';
import {getAuthorizationStatus} from '../../selectors';
import * as operations from '../../operations';


type Props = RouteComponentProps & {
  cardType: string;
  offer: Offer;
  onCardHover: (offerId: number | null) => (event: React.MouseEvent) => void;
  authorizationStatus: string;
  setFavoriteStatus: (offerId: number, status: number) => void;
}

const OfferCard: React.FC<Props> = (props: Props) => {
  const {
    history,
    cardType,
    offer,
    onCardHover,
    authorizationStatus,
    setFavoriteStatus,
  } = props;

  const {
    id,
    title,
    previewImage,
    price,
    rating,
    type,
    isFavorite,
    isPremium,
  } = offer;

  const authorized = isAuthorized(authorizationStatus);
  const ratingRounded = Math.round(rating);

  const handleBookmarkButtonClick = () => {
    if (!authorized) {
      history.push(AppRoute.LOGIN);
    } else {
      const status = +(!isFavorite);
      setFavoriteStatus(id, status);
    }
  };


  const placeCardClass = cn({
    'cities__place-card': cardType === CardType.CITY,
    'near-places__card': cardType === CardType.NEAR,
    'favorites__card': cardType === CardType.FAVORITE,
    'place-card': true,
  });
  const imageWrapperClass = cn({
    'cities__image-wrapper': cardType === CardType.CITY,
    'near-places__image-wrapper': cardType === CardType.NEAR,
    'favorites__image-wrapper': cardType === CardType.FAVORITE,
    'place-card__image-wrapper': true,
  });
  const bookmarkButtonClass = cn({
    'place-card__bookmark-button button': true,
    'place-card__bookmark-button--active': isFavorite,
  });
  const cardInfoClass = cn({
    'place-card__info': true,
    'favorites__card-info': cardType === CardType.FAVORITE,
  });

  return (
    <article
      onMouseEnter={onCardHover && onCardHover(id)}
      onMouseLeave={onCardHover && onCardHover(null)}
      className={placeCardClass}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={imageWrapperClass}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className={cardInfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text"> &#47;&nbsp;night</span>
          </div>
          <button onClick={handleBookmarkButtonClick} className={bookmarkButtonClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getRatingStarsStyle(ratingRounded)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  setFavoriteStatus(offerId, status) {
    dispatch(operations.setFavoriteStatus(offerId, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
