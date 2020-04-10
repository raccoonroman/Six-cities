import * as actions from '@/actions';
import { AuthorizationStatus } from '@/const';


export const loadOffers = () => (dispatch, _, api) => api
  .get('/hotels')
  .then((data) => {
    dispatch(actions.loadOffers(data));
  })
  .catch((err) => {
    throw err;
  });

export const loadNearbyOffers = (offerId) => (dispatch, _, api) => api
  .get(`/hotels/${offerId}/nearby`)
  .then((data) => {
    dispatch(actions.loadNearbyOffers(data));
  })
  .catch((err) => {
    throw err;
  });

export const checkAuth = () => (dispatch, _, api) => api
  .get('/login')
  .then((data) => {
    dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(actions.setEmail(data.email));
  })
  .catch((err) => {
    throw err;
  });

export const login = (authData, goToPreviousPage) => (dispatch, _, api) => api
  .post('/login', {
    email: authData.login,
    password: authData.password,
  })
  .then((data) => {
    goToPreviousPage();
    dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(actions.setEmail(data.email));
  })
  .catch((err) => {
    throw err;
  });

export const loadComments = (offerId) => (dispatch, _, api) => api
  .get(`/comments/${offerId}`)
  .then((data) => {
    dispatch(actions.loadComments(data));
  })
  .catch((err) => {
    throw err;
  });

export const postComment = (comment, offerId, enableForm, clearForm) => (dispatch, _, api) => api
  .post(`/comments/${offerId}`, {
    comment: comment.comment,
    rating: comment.rating,
  })
  .then((data) => {
    enableForm();
    clearForm();
    dispatch(actions.loadComments(data));
  })
  .catch((err) => {
    enableForm();
    throw err;
  });

export const setFavoriteStatus = (offerId, status) => (dispatch, _, api) => api
  .post(`/favorite/${offerId}/${status}`)
  .then((data) => {
    dispatch(actions.updateOffer(data));
  })
  .catch((err) => {
    throw err;
  });
