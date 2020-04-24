import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { CardType, AuthorizationStatus } from '@/const';
import { Offer } from '@/types';
import OffersList from '@/components/offers-list';


const mockStore = configureStore([]);

const mockOffers: Offer[] = [
  {
    id: 336,
    title: 'Title 1',
    previewImage: 'https://i.picsum.photos/id/336/260/200.jpg',
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
      zoom: 12,
    },
    city: {
      name: 'Vinnytsia',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13,
      },
    },
  },
  {
    id: 337,
    title: 'Title 2',
    previewImage: 'https://i.picsum.photos/id/337/260/200.jpg',
    price: 400,
    rating: 4.2,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.367503,
      longitude: 4.752484,
      zoom: 12,
    },
    city: {
      name: 'Vinnytsia',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13,
      },
    },
  },
  {
    id: 338,
    title: 'Title 3',
    previewImage: 'https://i.picsum.photos/id/338/260/200.jpg',
    price: 456,
    rating: 3.8,
    type: 'apartment',
    bedrooms: 4,
    maxAdults: 6,
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.501544,
      longitude: 4.058915,
      zoom: 12,
    },
    city: {
      name: 'Vinnytsia',
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13,
      },
    },
  },
];


it('Render <OffersList />', () => {
  const store = mockStore({
    authorization: {
      authorization: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <OffersList
          className="near-places__list places__list"
          cardsType={CardType.NEAR}
          offers={mockOffers}
        />
      </BrowserRouter>
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
