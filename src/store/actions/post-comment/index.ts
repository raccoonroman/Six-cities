import PostComment from '@/store/actions/post-comment/types';
import { AsyncAction, createAction } from '@/store/actions/common';
import { CommentPost, CommentRaw } from '@/api/types';

export const postCommentPending = () => createAction(PostComment.PENDING);
export const postCommentReject = () => createAction(PostComment.REJECT);
export const postCommentResolve = (comments: CommentRaw[]) => (
  createAction(PostComment.RESOLVE, comments));

export const postComment = (
  commentData: CommentPost,
  offerId: number,
  enableForm: Function,
  clearForm: Function,
): AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(postCommentPending());
    const comments = await api.postComment(commentData, offerId);
    enableForm();
    clearForm();
    dispatch(postCommentResolve(comments));
  } catch (err) {
    enableForm();
    dispatch(postCommentReject());
  }
};
