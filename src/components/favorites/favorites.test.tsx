import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {OfferRaw} from '../../types';
import Favorites from './favorites';


const mockStore = configureStore([]);

const mockOffers: OfferRaw[] = [
  {
    'id': 100490,
    'title': `The best title ever`,
    'preview_image': `https://i.picsum.photos/id/22/400/200.jpg`,
    'price': 333,
    'rating': 3.3,
    'type': `apartment`,
    'bedrooms': 12,
    'max_adults': 12,
    'is_favorite': true,
    'is_premium': false,
    'location': {
      'latitude': 52.35,
      'longitude': 4.67,
      'zoom': 14,
    },
    'city': {
      'name': `Vinnytsya`,
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 12,
      },
    },
    'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    'goods': [`Baby seat`, `Towels`, `Dishwasher`, `Breakfast`],
    'host': {
      'avatar_url': `https://i.picsum.photos/id/58/400/200.jpg`,
      'id': 911,
      'is_pro': false,
      'name': `Rachel`,
    },
    'images': [`https://i.picsum.photos/id/82/400/200.jpg`, `https://i.picsum.photos/id/83/400/200.jpg`, `https://i.picsum.photos/id/84/400/200.jpg`, `https://i.picsum.photos/id/85/400/200.jpg`, `https://i.picsum.photos/id/86/400/200.jpg`, `https://i.picsum.photos/id/87/400/200.jpg`, `https://i.picsum.photos/id/88/400/200.jpg`, `https://i.picsum.photos/id/89/400/200.jpg`],
  },
  {
    'id': 100491,
    'title': `Some title`,
    'preview_image': `https://i.picsum.photos/id/23/400/200.jpg`,
    'price': 900,
    'rating': 4.5,
    'type': `room`,
    'bedrooms': 2,
    'max_adults': 4,
    'is_favorite': true,
    'is_premium': true,
    'location': {
      'latitude': 51,
      'longitude': 5,
      'zoom': 16,
    },
    'city': {
      'name': `Kyiv`,
      'location': {
        'latitude': 52,
        'longitude': 4.9,
        'zoom': 12,
      },
    },
    'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    'goods': [`Towels`, `Breakfast`],
    'host': {
      'avatar_url': `https://i.picsum.photos/id/59/400/200.jpg`,
      'id': 912,
      'is_pro': true,
      'name': `Chandler`,
    },
    'images': [`https://i.picsum.photos/id/182/400/200.jpg`, `https://i.picsum.photos/id/183/400/200.jpg`, `https://i.picsum.photos/id/184/400/200.jpg`, `https://i.picsum.photos/id/185/400/200.jpg`, `https://i.picsum.photos/id/186/400/200.jpg`, `https://i.picsum.photos/id/187/400/200.jpg`, `https://i.picsum.photos/id/188/400/200.jpg`, `https://i.picsum.photos/id/189/400/200.jpg`],
  }
];


describe(`Render <Favorites />`, () => {
  it(`When favorites list is empty`, () => {
    const store = mockStore({
      offers: [],
      authorization: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      userData: {
        email: `name@gmail.com`,
      },
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Favorites />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`When favorites list is not empty`, () => {
    const store = mockStore({
      offers: mockOffers,
      authorization: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      userData: {
        email: `name@gmail.com`,
      },
    });

    const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Favorites />
          </BrowserRouter>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
