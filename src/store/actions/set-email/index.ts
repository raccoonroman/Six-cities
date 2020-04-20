import { User } from '@/api/types';
import SetEmail from '@/store/actions/set-email/types';
import { AsyncAction, createAction } from '@/store/actions/common';

export const setEmailPending = () => createAction(SetEmail.PENDING);
export const setEmailResolve = (email: string) => createAction(SetEmail.RESOLVE, email);
export const setEmailReject = () => createAction(SetEmail.REJECT);

// eslint-disable-next-line max-len
export const login = (loginData: User, goToPreviousPage: Function): AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(setEmailPending());
    const authInfo = await api.login(loginData);
    dispatch(actions.requireAuthorization(AuthorizationStatus.AUTH));
    dispatch(setEmailResolve(authInfo.email));
    goToPreviousPage();
  } catch (err) {
    dispatch(setEmailReject());
    throw err;
  }
};
