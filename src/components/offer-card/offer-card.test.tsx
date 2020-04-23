import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthorizationStatus, CardType, AppRoute } from '@/const';
import { Offer } from '@/types';
import OfferCard from '@/components/offer-card';


const mockStore = configureStore([]);

const offer: Offer = {
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
};


it('Should offer card render correctly', () => {
  const store = mockStore({
    authorization: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Route
            exact
            path={AppRoute.OFFER}
            render={() => (
              <OfferCard
                cardType={CardType.NEAR}
                offer={offer}
              />
            )}
          />
        </BrowserRouter>
      </Provider>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
