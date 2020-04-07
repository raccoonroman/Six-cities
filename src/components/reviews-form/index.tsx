import * as React from 'react';
import {connect} from 'react-redux';
import * as operations from '../../operations';


const STARS_QUANTITY = 5;
const TextLength = {
  MIN: 50,
  MAX: 300,
};

const StarValue = {
  5: `perfect`,
  4: `good`,
  3: `not bad`,
  2: `badly`,
  1: `terribly`,
};

interface Props {
  offerId: number;
  postComment: (commentData: object, offerId: number, enableForm: Function, clearForm: Function) => void;
}

const ReviewsForm: React.FC<Props> = (props: Props) => {
  const {offerId, postComment} = props;
  const formInitialState = {rating: `0`, review: ``};
  const [formState, setFormState] = React.useState(formInitialState);
  const [isFormDisabled, setIsFormDisabled] = React.useState(false);
  const {rating, review} = formState;

  const enableForm = () => setIsFormDisabled(false);
  const clearForm = () => setFormState(formInitialState);

  const handleInputChange = ({target}) => {
    setFormState(Object.assign({}, formState, {
      [target.name]: target.value,
    }));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const comment = {rating, comment: review};
    setIsFormDisabled(true);
    postComment(comment, offerId, enableForm, clearForm);
  };

  const isSubmitAllowed = (+rating > 0) && (review.length >= TextLength.MIN) && (review.length <= TextLength.MAX);

  const renderStars = () => {
    const result = [];

    for (let i = STARS_QUANTITY; i > 0; i -= 1) {
      result.push(
          <React.Fragment key={`star` + i}>
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
            <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title={StarValue[i]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
      );
    }

    return result;
  };


  return (
    <form onSubmit={handleFormSubmit} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {renderStars()}
      </div>
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
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with <b className="reviews__text-amount">minimum 50 and maximum 300 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isSubmitAllowed}>Submit</button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  postComment(commentData, offerId, enableForm, clearForm) {
    dispatch(operations.postComment(commentData, offerId, enableForm, clearForm));
  },
});

export default connect(null, mapDispatchToProps)(ReviewsForm);
