import { DEFAULT_CITIES, ActionType, AuthorizationStatus } from '@/const';
import {
  offers,
  cities,
  authorization,
  userData,
  commentsByOffer,
  nearbyOffers,
} from '@/reducer';


const mockOffers = [
  {
    id: 100500,
    title: 'Lorem ipsum',
    previewImage: 'https://i.picsum.photos/id/22/260/200.jpg',
    price: 100,
    rating: 4.3,
    type: 'apartment',
    bedrooms: 10,
    maxAdults: 10,
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 12,
    },
    city: {
      name: 'Vinnytsia',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    goods: ['Baby seat', 'Towels', 'Dishwasher', 'Breakfast'],
    hostAvatarUrl: 'https://i.picsum.photos/id/58/400/200.jpg',
    hostId: 911,
    hostIsPro: false,
    hostName: 'Rachel',
    images: ['https://i.picsum.photos/id/82/400/200.jpg', 'https://i.picsum.photos/id/83/400/200.jpg', 'https://i.picsum.photos/id/84/400/200.jpg', 'https://i.picsum.photos/id/85/400/200.jpg', 'https://i.picsum.photos/id/86/400/200.jpg', 'https://i.picsum.photos/id/87/400/200.jpg', 'https://i.picsum.photos/id/88/400/200.jpg', 'https://i.picsum.photos/id/89/400/200.jpg'],
  },
  {
    id: 100501,
    title: 'Ut enim ad minim veniam',
    previewImage: 'https://i.picsum.photos/id/23/260/200.jpg',
    price: 9,
    rating: 4.0,
    type: 'room',
    bedrooms: 4,
    maxAdults: 5,
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.341667,
      longitude: 4.902452,
      zoom: 12,
    },
    city: {
      name: 'Vinnytsia',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 11,
      },
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    goods: ['Towels', 'Dishwasher', 'Breakfast'],
    hostAvatarUrl: 'https://i.picsum.photos/id/105/400/200.jpg',
    hostId: 912,
    hostIsPro: false,
    hostName: 'Phoebe',
    images: ['https://i.picsum.photos/id/92/400/200.jpg', 'https://i.picsum.photos/id/93/400/200.jpg', 'https://i.picsum.photos/id/94/400/200.jpg', 'https://i.picsum.photos/id/95/400/200.jpg', 'https://i.picsum.photos/id/96/400/200.jpg', 'https://i.picsum.photos/id/97/400/200.jpg', 'https://i.picsum.photos/id/98/400/200.jpg', 'https://i.picsum.photos/id/99/400/200.jpg'],
  },
  {
    id: 100502,
    title: 'Excepteur sint occaecat cupidatat non proident',
    previewImage: 'https://i.picsum.photos/id/24/260/200.jpg',
    price: 13,
    rating: 4.9,
    type: 'house',
    bedrooms: 3,
    maxAdults: 3,
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.359160,
      longitude: 4.849366,
      zoom: 14,
    },
    city: {
      name: 'Kyiv',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13,
      },
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    goods: ['Dinner', 'Breakfast'],
    hostAvatarUrl: 'https://i.picsum.photos/id/106/400/200.jpg',
    hostId: 913,
    hostIsPro: true,
    hostName: 'Monica',
    images: ['https://i.picsum.photos/id/112/400/200.jpg', 'https://i.picsum.photos/id/113/400/200.jpg', 'https://i.picsum.photos/id/114/400/200.jpg', 'https://i.picsum.photos/id/115/400/200.jpg', 'https://i.picsum.photos/id/116/400/200.jpg', 'https://i.picsum.photos/id/117/400/200.jpg', 'https://i.picsum.photos/id/118/400/200.jpg', 'https://i.picsum.photos/id/119/400/200.jpg'],
  },
];

const updatedMockOffers = [
  {
    id: 100500,
    key1: 'value1',
  },
  {
    id: 100501,
    title: 'Ut enim ad minim veniam',
    previewImage: 'https://i.picsum.photos/id/23/260/200.jpg',
    price: 9,
    rating: 4.0,
    type: 'room',
    bedrooms: 4,
    maxAdults: 5,
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.341667,
      longitude: 4.902452,
      zoom: 12,
    },
    city: {
      name: 'Vinnytsia',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 11,
      },
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    goods: ['Towels', 'Dishwasher', 'Breakfast'],
    hostAvatarUrl: 'https://i.picsum.photos/id/105/400/200.jpg',
    hostId: 912,
    hostIsPro: false,
    hostName: 'Phoebe',
    images: ['https://i.picsum.photos/id/92/400/200.jpg', 'https://i.picsum.photos/id/93/400/200.jpg', 'https://i.picsum.photos/id/94/400/200.jpg', 'https://i.picsum.photos/id/95/400/200.jpg', 'https://i.picsum.photos/id/96/400/200.jpg', 'https://i.picsum.photos/id/97/400/200.jpg', 'https://i.picsum.photos/id/98/400/200.jpg', 'https://i.picsum.photos/id/99/400/200.jpg'],
  },
  {
    id: 100502,
    title: 'Excepteur sint occaecat cupidatat non proident',
    previewImage: 'https://i.picsum.photos/id/24/260/200.jpg',
    price: 13,
    rating: 4.9,
    type: 'house',
    bedrooms: 3,
    maxAdults: 3,
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.359160,
      longitude: 4.849366,
      zoom: 14,
    },
    city: {
      name: 'Kyiv',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13,
      },
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    goods: ['Dinner', 'Breakfast'],
    hostAvatarUrl: 'https://i.picsum.photos/id/106/400/200.jpg',
    hostId: 913,
    hostIsPro: true,
    hostName: 'Monica',
    images: ['https://i.picsum.photos/id/112/400/200.jpg', 'https://i.picsum.photos/id/113/400/200.jpg', 'https://i.picsum.photos/id/114/400/200.jpg', 'https://i.picsum.photos/id/115/400/200.jpg', 'https://i.picsum.photos/id/116/400/200.jpg', 'https://i.picsum.photos/id/117/400/200.jpg', 'https://i.picsum.photos/id/118/400/200.jpg', 'https://i.picsum.photos/id/119/400/200.jpg'],
  },
];

const mockComments = [
  {
    commentId: 110,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: '2011-10-05T14:48:00.000Z',
    rating: 5,
    userAvatarUrl: 'https://i.picsum.photos/id/136/200/200.jpg',
    userId: 300,
    isUserPro: false,
    userName: 'Alex',
  },
  {
    commentId: 111,
    text: 'Lorem ipsum dolor sit amet',
    date: '2012-12-06T12:18:50.000Z',
    rating: 4,
    userAvatarUrl: 'https://i.picsum.photos/id/137/200/200.jpg',
    userId: 301,
    isUserPro: true,
    userName: 'John',
  },
];


describe('Reducers working correctly', () => {
  describe('Reducer "offers" works correctly', () => {
    it('Reducer without additional parameters should return initial state', () => {
      expect(offers(undefined, {})).toEqual([]);
    });

    it('Reducer should update offers by load offers', () => {
      expect(offers([], {
        type: ActionType.LOAD_OFFERS,
        payload: mockOffers,
      })).toEqual(mockOffers);
    });

    it('Reducer should update offers by setting offer with new parameters', () => {
      expect(offers(mockOffers, {
        type: ActionType.UPDATE_OFFER,
        payload: {
          id: 100500,
          key1: 'value1',
        },
      })).toEqual(updatedMockOffers);
    });
  });

  describe('Reducer "cities" works correctly', () => {
    it('Reducer without additional parameters should return initial state', () => {
      expect(cities(undefined, {})).toEqual({
        currentCity: DEFAULT_CITIES[0],
        cities: DEFAULT_CITIES,
      });
    });

    it('Reducer should update cities by load offers', () => {
      expect(cities({
        currentCity: DEFAULT_CITIES[0],
        cities: DEFAULT_CITIES,
      }, {
        type: ActionType.LOAD_OFFERS,
        payload: mockOffers,
      })).toEqual({
        currentCity: 'Vinnytsia',
        cities: ['Vinnytsia', 'Kyiv'],
      });
    });

    it('Reducer should change currentCity by a given value', () => {
      expect(cities({
        currentCity: 'Vinnytsia',
        cities: ['Vinnytsia', 'Kyiv'],
      }, {
        type: ActionType.SET_CITY,
        payload: 'Kyiv',
      })).toEqual({
        currentCity: 'Kyiv',
        cities: ['Vinnytsia', 'Kyiv'],
      });
    });
  });

  describe('Reducer "authorization" works correctly', () => {
    it('Reducer without additional parameters should return initial state', () => {
      expect(authorization(undefined, {})).toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
    });

    it('Reducer should change authorizationStatus by a given value', () => {
      expect(authorization({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      })).toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });

      expect(authorization({
        authorizationStatus: AuthorizationStatus.AUTH,
      }, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH,
      })).toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });

      expect(authorization({
        authorizationStatus: AuthorizationStatus.AUTH,
      }, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      })).toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
      });

      expect(authorization({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.NO_AUTH,
      })).toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      });
    });
  });

  describe('Reducer "userData" works correctly', () => {
    it('Reducer without additional parameters should return initial state', () => {
      expect(userData(undefined, {})).toEqual({
        email: '',
      });
    });

    it('Reducer should change email by a given value', () => {
      expect(userData({
        email: '',
      }, {
        type: ActionType.SET_EMAIL,
        payload: 'romankushnir@gmail.com',
      })).toEqual({
        email: 'romankushnir@gmail.com',
      });
    });
  });

  describe('Reducer "commentsByOffer" works correctly', () => {
    it('Reducer without additional parameters should return initial state', () => {
      expect(commentsByOffer(undefined, {})).toEqual([]);
    });

    it('Reducer should update commentsByOffer by load comments', () => {
      expect(commentsByOffer([], {
        type: ActionType.LOAD_COMMENTS,
        payload: mockComments,
      })).toEqual(mockComments);
    });
  });

  describe('Reducer "nearbyOffers" works correctly', () => {
    it('Reducer without additional parameters should return initial state', () => {
      expect(nearbyOffers(undefined, {})).toEqual([]);
    });

    it('Reducer should update offers by load nearby offers', () => {
      expect(nearbyOffers([], {
        type: ActionType.LOAD_NEARBY_OFFERS,
        payload: mockOffers,
      })).toEqual(mockOffers);
    });

    it('Reducer should update offers by setting offer with new parameters', () => {
      expect(nearbyOffers(mockOffers, {
        type: ActionType.UPDATE_OFFER,
        payload: {
          id: 100500,
          key1: 'value1',
        },
      })).toEqual(updatedMockOffers);
    });
  });
});
