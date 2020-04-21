import LoadComments from '@/store/actions/load-comments/types';
import { AsyncAction, createAction } from '@/store/actions/common';
import { CommentRaw } from '@/api/types';

export const loadCommentsPending = () => createAction(LoadComments.PENDING);
export const loadCommentsReject = () => createAction(LoadComments.REJECT);
export const loadCommentsResolve = (comments: CommentRaw[]) => {
  const action = createAction(LoadComments.RESOLVE, comments);
  return action;
};

export const loadComments = (offerId: number): AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(loadCommentsPending());
    const comments = await api.loadComments(offerId);
    dispatch(loadCommentsResolve(comments));
  } catch (err) {
    dispatch(loadCommentsReject());
    throw err;
  }
};
