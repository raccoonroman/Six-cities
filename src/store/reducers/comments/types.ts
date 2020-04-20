import { CommentRaw } from '@/api/types';
import { Status } from '@/store/reducers/common';
import {
  loadCommentsPending,
  loadCommentsResolve,
  loadCommentsReject,
} from '@/store/actions/load-comments';
import {
  postCommentPending,
  postCommentResolve,
  postCommentReject,
} from '@/store/actions/post-comment';

export interface CommentsState {
  loadCommentsStatus: Status;
  postCommentStatus: Status;
  comments: CommentRaw[];
}

export type CommentsActions =
  | ReturnType<typeof loadCommentsPending>
  | ReturnType<typeof loadCommentsResolve>
  | ReturnType<typeof loadCommentsReject>
  | ReturnType<typeof postCommentPending>
  | ReturnType<typeof postCommentResolve>
  | ReturnType<typeof postCommentReject>;
