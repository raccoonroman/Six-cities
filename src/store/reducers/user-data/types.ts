import { Status } from '@/store/reducers/common';
import {
  setEmailPending, setEmailResolve, setEmailReject,
} from '@/store/actions/set-email';

export interface UserDataState {
  status: Status;
  email: string;
}

export type UserDataActions =
  | ReturnType<typeof setEmailPending>
  | ReturnType<typeof setEmailResolve>
  | ReturnType<typeof setEmailReject>;
