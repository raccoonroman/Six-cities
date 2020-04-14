import ActionType from '@/store/actions/types';

export interface InitialState {
  authorizationStatus: string;
}

interface RequiredAuthorization {
  type: typeof ActionType.REQUIRED_AUTHORIZATION;
  payload: string;
}

export type Action = RequiredAuthorization;
