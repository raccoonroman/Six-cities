import { AxiosRequestConfig } from 'axios';
import HttpClient from '@/api/http-client';
import { CommentRaw } from '@/types';

export default class Api extends HttpClient {
  public constructor() {
    super('https://htmlacademy-react-3.appspot.com/six-cities');
    this.initializeRequestInterceptor();
  }

  private initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this.handleRequest,
      this.handleError,
    );
  };

  private handleRequest = (config: AxiosRequestConfig) => {
    console.log(config);
    return config;
  };

  public loadComments = (offerId: number) => this.instance
    .get<CommentRaw[]>(`/comments/${offerId}`);
}
