import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizationStatus, CardType } from '@/const';
import { Offer } from '@/types';
import OfferCard from '@/components/offer-card';


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
];

describe('Render <OfferCard />', () => {
  const store = mockStore({
    authorization: {
      authorization: AuthorizationStatus.NO_AUTH,
    },
  });

  it('with type "city"', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <OfferCard
            cardType={CardType.CITY}
            offer={mockOffers[0]}
          />
        </BrowserRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('with type "near"', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <OfferCard
            cardType={CardType.NEAR}
            offer={mockOffers[0]}
          />
        </BrowserRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('with type "favorite"', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <OfferCard
            cardType={CardType.FAVORITE}
            offer={mockOffers[0]}
          />
        </BrowserRouter>
      </Provider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
