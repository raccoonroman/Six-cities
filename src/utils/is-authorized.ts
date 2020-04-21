import { AuthorizationStatus } from '@/const';

export default (authorizationStatus: string) => {
  const authorized = AuthorizationStatus.AUTH;
  return authorizationStatus === authorized;
};
