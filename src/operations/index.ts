import { User, CommentPost } from '@/api/types';
import * as actions from '@/store/actions';
import { AuthorizationStatus } from '@/const';


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
