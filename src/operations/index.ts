import { User, CommentPost } from '@/api/types';
import * as actions from '@/actions';
import { AuthorizationStatus } from '@/const';


export const loadOffers = () => async (dispatch, _, api) => {
  try {
    const offers = await api.loadOffers();
    dispatch(actions.loadOffers(offers));
  } catch (err) {
    console.log(err);
  }
};

export const loadNearbyOffers = (offerId: number) => async (dispatch, _, api) => {
  try {
    const nearbyOffers = await api.loadNearbyOffers(offerId);
    dispatch(actions.loadNearbyOffers(nearbyOffers));
  } catch (err) {
    console.log(err);
  }
};

export const checkAuth = () => async (dispatch, _, api) => {
  try {
    const authInfo = await api.checkAuth();
    dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(actions.setEmail(authInfo.email));
  } catch (err) {
    console.log(err);
  }
};

export const login = (loginData: User, goToPreviousPage: Function) => async (dispatch, _, api) => {
  try {
    const authInfo = await api.login(loginData);
    goToPreviousPage();
    dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(actions.setEmail(authInfo.email));
  } catch (err) {
    console.log(err);
  }
};

export const loadComments = (offerId: number) => async (dispatch, _, api) => {
  try {
    const comments = await api.loadComments(offerId);
    dispatch(actions.loadComments(comments));
  } catch (err) {
    console.log(err);
  }
};

export const postComment = (commentData: CommentPost, offerId: number, enableForm: Function, clearForm: Function) => async (dispatch, _, api) => {
  try {
    const comments = await api.postComment(commentData, offerId);
    enableForm();
    clearForm();
    dispatch(actions.loadComments(comments));
  } catch (err) {
    enableForm();
    console.log(err);
  }
};

export const setFavoriteStatus = (offerId: number, status: number) => async (dispatch, _, api) => {
  try {
    const offer = await api.setFavoriteStatus(offerId, status);
    dispatch(actions.updateOffer(offer));
  } catch (err) {
    console.log(err);
  }
};
