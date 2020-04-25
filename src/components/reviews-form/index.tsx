import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postComment } from '@/store/actions/post-comment';
import { getPostCommentStatus } from '@/store/selectors';

const STARS_QUANTITY = 5;
const TextLength = {
  MIN: 50,
  MAX: 300,
};

type StarValue = {
  [key: number]: string;
};

const StarValue: StarValue = {
  5: 'perfect',
  4: 'good',
  3: 'not bad',
  2: 'badly',
  1: 'terribly',
};

type ChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

interface Props {
  offerId: number;
}

const ReviewsForm: React.FC<Props> = ({ offerId }) => {
  const dispatch = useDispatch();

  const postCommentStatus = useSelector(getPostCommentStatus);

  const formInitialState = { rating: 0, review: '' };
  const [formState, setFormState] = useState(formInitialState);
  const [isFormDisabled, setIsFormDisabled] = useState(false);
  const { rating, review } = formState;

  const enableForm = () => setIsFormDisabled(false);
  const clearForm = () => setFormState(formInitialState);

  const handleInputChange = ({ target }: ChangeEvent) => {
    setFormState({ ...formState, [target.name]: target.value });
  };

  const handleFormSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    const comment = { rating, comment: review };
    setIsFormDisabled(true);
    dispatch(postComment(comment, offerId, enableForm, clearForm));
  };

  const isSubmitAllowed = (+rating > 0)
    && (review.length >= TextLength.MIN)
    && (review.length <= TextLength.MAX)
    && !postCommentStatus.pending;

  const renderStars = () => {
    const result = [];

    for (let i = STARS_QUANTITY; i > 0; i -= 1) {
      result.push(
        <React.Fragment key={`star${i}`}>
          <input
            onChange={handleInputChange}
            checked={+rating === i}
            className="form__rating-input visually-hidden"
            name="rating"
            value={i}
            id={`${i}-stars`}
            type="radio"
            disabled={isFormDisabled}
          />
          <label
            htmlFor={`${i}-stars`}
            className="reviews__rating-label form__rating-label"
            title={StarValue[i]}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>,
      );
    }

    return result;
  };


  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">{renderStars()}</div>
      <textarea
        value={review}
        onChange={handleInputChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isFormDisabled}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          {' '}
          <span className="reviews__star">rating</span>
          {' '}
          and describe your stay with
          {' '}
          <b className="reviews__text-amount">minimum 50 and maximum 300 characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isSubmitAllowed}
        >
          {postCommentStatus.pending ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ReviewsForm;
