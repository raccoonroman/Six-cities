import HttpClient from '@/api/http-client';
import {
  AuthInfoRaw,
  User,
  OfferRaw,
  CommentRaw,
  CommentPost,
} from '@/api/types';

export default class Api extends HttpClient {
  public constructor(onUnauthorized: Function) {
    super('https://htmlacademy-react-3.appspot.com/six-cities', onUnauthorized);
  }

  public checkAuth = () => this.instance.get<AuthInfoRaw>('/login');

  public login = (loginData: User) => (
    this.instance.post<AuthInfoRaw>('/login', loginData));

  public loadOffers = () => this.instance.get<OfferRaw[]>('/hotels');

  public loadNearbyOffers = (offerId: number) => (
    this.instance.get<OfferRaw[]>(`/hotels/${offerId}/nearby`));

  public loadComments = (offerId: number) => (
    this.instance.get<CommentRaw[]>(`/comments/${offerId}`));

  public postComment = (commentData: CommentPost, offerId: number) => (
    this.instance.post<CommentRaw[]>(`/comments/${offerId}`, commentData));

  public setFavoriteStatus = (offerId: number, status: number) => (
    this.instance.post<OfferRaw>(`/favorite/${offerId}/${status}`));
}
