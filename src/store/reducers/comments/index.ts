import produce from 'immer';
import LoadComments from '@/store/actions/load-comments/types';
import PostComment from '@/store/actions/post-comment/types';
import { CommentsState, CommentsActions } from '@/store/reducers/comments/types';
import neverReached from '@/utils/never-reached';

const InitialState: CommentsState = {
  loadCommentsStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  postCommentStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  comments: [],
};

export default (state = InitialState, action: CommentsActions) => produce(state, (draft) => {
  switch (action.type) {
    case LoadComments.PENDING: {
      draft.loadCommentsStatus.pending = true;
      draft.loadCommentsStatus.resolve = false;
      draft.loadCommentsStatus.reject = false;
      break;
    }
    case LoadComments.RESOLVE: {
      draft.loadCommentsStatus.pending = false;
      draft.loadCommentsStatus.resolve = true;
      draft.comments = action.payload;
      break;
    }
    case LoadComments.REJECT: {
      draft.loadCommentsStatus.pending = false;
      draft.loadCommentsStatus.reject = true;
      break;
    }
    case PostComment.PENDING: {
      draft.postCommentStatus.pending = true;
      draft.postCommentStatus.resolve = false;
      draft.postCommentStatus.reject = false;
      break;
    }
    case PostComment.RESOLVE: {
      draft.postCommentStatus.pending = false;
      draft.postCommentStatus.resolve = true;
      draft.comments = action.payload;
      break;
    }
    case PostComment.REJECT: {
      draft.postCommentStatus.pending = false;
      draft.postCommentStatus.reject = true;
      break;
    }
    default: {
      neverReached(action);
    }
  }
});
