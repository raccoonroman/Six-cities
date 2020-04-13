import * as actions from '@/actions';
import { OfferRaw, CommentRaw } from '@/api/types';
import { ActionType, AuthorizationStatus } from '@/const';

const mockOffers: OfferRaw[] = [
  {
    id: 100490,
    title: 'The best title ever',
    preview_image: 'https://i.picsum.photos/id/22/400/200.jpg',
    price: 333,
    rating: 3.3,
    type: 'apartment',
    bedrooms: 12,
    max_adults: 12,
    is_favorite: false,
    is_premium: false,
    location: {
      latitude: 52.35,
      longitude: 4.67,
      zoom: 14,
    },
    city: {
      name: 'Vinnytsya',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 12,
      },
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    goods: ['Baby seat', 'Towels', 'Dishwasher', 'Breakfast'],
    host: {
      avatar_url: 'https://i.picsum.photos/id/58/400/200.jpg',
      id: 911,
      is_pro: false,
      name: 'Rachel',
    },
    images: ['https://i.picsum.photos/id/82/400/200.jpg', 'https://i.picsum.photos/id/83/400/200.jpg', 'https://i.picsum.photos/id/84/400/200.jpg', 'https://i.picsum.photos/id/85/400/200.jpg', 'https://i.picsum.photos/id/86/400/200.jpg', 'https://i.picsum.photos/id/87/400/200.jpg', 'https://i.picsum.photos/id/88/400/200.jpg', 'https://i.picsum.photos/id/89/400/200.jpg'],
  },
  {
    id: 100491,
    title: 'Some title',
    preview_image: 'https://i.picsum.photos/id/23/400/200.jpg',
    price: 900,
    rating: 4.5,
    type: 'room',
    bedrooms: 2,
    max_adults: 4,
    is_favorite: true,
    is_premium: true,
    location: {
      latitude: 51,
      longitude: 5,
      zoom: 16,
    },
    city: {
      name: 'Vinnytsya',
      location: {
        latitude: 52,
        longitude: 4.9,
        zoom: 12,
      },
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    goods: ['Towels', 'Breakfast'],
    host: {
      avatar_url: 'https://i.picsum.photos/id/59/400/200.jpg',
      id: 912,
      is_pro: true,
      name: 'Chandler',
    },
    images: ['https://i.picsum.photos/id/182/400/200.jpg', 'https://i.picsum.photos/id/183/400/200.jpg', 'https://i.picsum.photos/id/184/400/200.jpg', 'https://i.picsum.photos/id/185/400/200.jpg', 'https://i.picsum.photos/id/186/400/200.jpg', 'https://i.picsum.photos/id/187/400/200.jpg', 'https://i.picsum.photos/id/188/400/200.jpg', 'https://i.picsum.photos/id/189/400/200.jpg'],
  },
];

const commentsByOffer: CommentRaw[] = [
  {
    id: 0,
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2011-10-05T14:48:00.000Z',
    rating: 5,
    user: {
      avatar_url: 'https://i.picsum.photos/id/220/200/200.jpg',
      id: 0,
      is_pro: true,
      name: 'Rachel',
    },
  },
  {
    id: 1,
    comment: 'Lorem ipsum dolor sit amet',
    date: '2019-12-08T12:18:10.000Z',
    rating: 1,
    user: {
      avatar_url: 'https://i.picsum.photos/id/221/200/200.jpg',
      id: 1,
      is_pro: false,
      name: 'Monica',
    },
  },
];


describe('Action creators work correctly', () => {
  it('Action creator for loading offers returns correct action', () => {
    expect(actions.loadOffers([])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [],
    });

    expect(actions.loadOffers(mockOffers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: mockOffers,
    });
  });

  it('Action creator for setting city returns correct action', () => {
    expect(actions.setCity('cityName')).toEqual({
      type: ActionType.SET_CITY,
      payload: 'cityName',
    });

    expect(actions.setCity('anotherCity')).toEqual({
      type: ActionType.SET_CITY,
      payload: 'anotherCity',
    });
  });

  it('Action creator for require authorization returns correct action', () => {
    expect(actions.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(actions.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it('Action creator for setting email returns correct action', () => {
    expect(actions.setEmail('email')).toEqual({
      type: ActionType.SET_EMAIL,
      payload: 'email',
    });

    expect(actions.setEmail('name@gmail.com')).toEqual({
      type: ActionType.SET_EMAIL,
      payload: 'name@gmail.com',
    });
  });

  it('Action creator for loading comments returns correct action', () => {
    expect(actions.loadComments([])).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: [],
    });

    expect(actions.loadComments(commentsByOffer)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: commentsByOffer,
    });
  });

  it('Action creator for loading nearby offers returns correct action', () => {
    expect(actions.loadNearbyOffers([])).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [],
    });

    expect(actions.loadNearbyOffers(mockOffers)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: mockOffers,
    });
  });

  it('Action creator for updating offers returns correct action', () => {
    expect(actions.updateOffer(mockOffers[0])).toEqual({
      type: ActionType.UPDATE_OFFER,
      payload: mockOffers[0],
    });

    expect(actions.updateOffer(mockOffers[1])).toEqual({
      type: ActionType.UPDATE_OFFER,
      payload: mockOffers[1],
    });
  });
});
