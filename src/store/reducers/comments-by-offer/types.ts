import ActionType from '@/store/actions/types';
import { CommentRaw } from '@/api/types';

interface LoadComments {
  type: typeof ActionType.LOAD_COMMENTS;
  payload: CommentRaw[];
}

export type Action = LoadComments;
