import { AuthorizationStatus } from '@/const';

export default (authorizationStatus: AuthorizationStatus) => (
  authorizationStatus === AuthorizationStatus.AUTH);
