import { Status } from '@/store/reducers/common';
import {
  checkAuthPending, checkAuthResolve, checkAuthReject,
} from '@/store/actions/check-auth';
import {
  loginPending, loginResolve, loginReject,
} from '@/store/actions/login';

export interface AuthorizationState {
  checkAuthStatus: Status;
  loginStatus: Status;
  authorization: string;
}

export type AuthorizationActions =
  | ReturnType<typeof checkAuthPending>
  | ReturnType<typeof checkAuthResolve>
  | ReturnType<typeof checkAuthReject>
  | ReturnType<typeof loginPending>
  | ReturnType<typeof loginResolve>
  | ReturnType<typeof loginReject>;
