import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';
import {AuthorizationStatus, CardType} from '../../const';
import {Offer} from '../../types';
import OfferCard from './index';


const mockStore = configureStore([]);
configure({adapter: new Adapter()});

const offer: Offer = {
  id: 100500,
  title: `Excepteur sint occaecat cupidatat non proident`,
  previewImage: `https://i.picsum.photos/id/24/260/200.jpg`,
  price: 13,
  rating: 4.9,
  type: `house`,
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
    name: `Vinnytsia`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 13,
    },
  },
};


it(`Hover on offer card`, () => {
  const handleCardHover = jest.fn();
  const store = mockStore({
    authorization: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const card = mount(
      <Provider store={store}>
        <BrowserRouter>
          <OfferCard
            history={{}}
            cardType={CardType.NEAR}
            offer={offer}
            onCardHover={handleCardHover}
          />
        </BrowserRouter>
      </Provider>
  );

  const cardOne = card.find(`.place-card`).at(0);

  cardOne.simulate(`mouseEnter`);
  cardOne.simulate(`mouseLeave`);

  expect(handleCardHover).toHaveBeenCalledTimes(2);

  expect(handleCardHover.mock.calls[0][0]).toBe(100500);
  expect(handleCardHover.mock.calls[1][0]).toBe(null);
});
