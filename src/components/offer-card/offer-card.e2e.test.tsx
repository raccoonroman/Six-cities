import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { AuthorizationStatus, CardType } from '@/const';
import { Offer } from '@/types';
import OfferCard from '@/components/offer-card';


const mockStore = configureStore([]);
configure({ adapter: new Adapter() });

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

it('Hover on <OfferCard />', () => {
  const handleCardHover = jest.fn();

  const store = mockStore({
    authorization: {
      authorization: AuthorizationStatus.NO_AUTH,
    },
  });

  const offerCard = mount(
    <Provider store={store}>
      <BrowserRouter>
        <OfferCard
          cardType={CardType.CITY}
          offer={mockOffers[0]}
          onCardHover={handleCardHover}
        />
      </BrowserRouter>
    </Provider>,
  );

  const cardOne = offerCard.find('.place-card').at(0);

  cardOne.simulate('mouseEnter');
  cardOne.simulate('mouseLeave');

  expect(handleCardHover).toHaveBeenCalledTimes(2);
  expect(handleCardHover.mock.calls[0][0]).toBe(336);
  expect(handleCardHover.mock.calls[1][0]).toBe(null);
});
