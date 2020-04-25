import React from 'react';
import { useSelector } from 'react-redux';
import isAuthorized from '@/utils/is-authorized';
import getRatingStarsStyle from '@/utils/get-rating-stars-style';
import {
  getAuthorizationStatus,
  getTenSortedComments,
} from '@/store/selectors';
import ReviewsForm from '@/components/reviews-form';

interface Props {
  offerId: number;
}

const Reviews: React.FC<Props> = ({ offerId }) => {
  const comments = useSelector(getTenSortedComments);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const authorized = isAuthorized(authorizationStatus);

  const renderReviewItems = () => (
    comments.map((comment) => {
      const {
        commentId,
        text,
        date,
        rating,
        userAvatarUrl,
        userName,
      } = comment;

      const dateISOString = date.slice(0, 10);
      const dateReadableString = new Date(date).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      });

      return (
        <li key={commentId} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src={userAvatarUrl}
                width="54"
                height="54"
                alt={userName}
              />
            </div>
            <span className="reviews__user-name">{userName}</span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={getRatingStarsStyle(rating)} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">{text}</p>
            <time className="reviews__time" dateTime={dateISOString}>
              {dateReadableString}
            </time>
          </div>
        </li>
      );
    }));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">{renderReviewItems()}</ul>
      {authorized && <ReviewsForm offerId={offerId} />}
    </section>
  );
};

export default Reviews;
