import ActionType from '@/store/actions/types';

export interface InitialState {
  email: string;
}

interface SetEmail {
  type: typeof ActionType.SET_EMAIL;
  payload: string;
}

export type Action = SetEmail;
