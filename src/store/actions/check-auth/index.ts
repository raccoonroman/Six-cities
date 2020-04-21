import { AuthInfoRaw } from '@/api/types';
import CheckAuth from '@/store/actions/check-auth/types';
import { AsyncAction, createAction } from '@/store/actions/common';

export const checkAuthPending = () => createAction(CheckAuth.PENDING);
export const checkAuthReject = () => createAction(CheckAuth.REJECT);
export const checkAuthResolve = (authInfo: AuthInfoRaw) => (
  createAction(CheckAuth.RESOLVE, authInfo));

export const checkAuth = (): AsyncAction => async (dispatch, _, api) => {
  try {
    dispatch(checkAuthPending());
    const authInfo = await api.checkAuth();
    dispatch(checkAuthResolve(authInfo));
  } catch (err) {
    dispatch(checkAuthReject());
  }
};
