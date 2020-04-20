import { User, AuthInfoRaw } from '@/api/types';
import Login from '@/store/actions/login/types';
import { AsyncAction, createAction } from '@/store/actions/common';

export const loginPending = () => createAction(Login.PENDING);
export const loginResolve = (authInfo: AuthInfoRaw) => createAction(Login.RESOLVE, authInfo);
export const loginReject = () => createAction(Login.REJECT);

// eslint-disable-next-line max-len
export const login = (loginData: User, goToPreviousPage: Function): AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(loginPending());
    const authInfo = await api.login(loginData);
    dispatch(loginResolve(authInfo));
    goToPreviousPage();
  } catch (err) {
    dispatch(loginReject());
    throw err;
  }
};
