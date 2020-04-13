import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus } from '@/const';
import { CommentRaw } from '@/types';
import Reviews from '@/components/reviews';


const mockStore = configureStore([]);

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


describe('Render <Reviews />', () => {
  it('When user is not authorized', () => {
    const store = mockStore({
      authorization: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      },
      userData: {
        email: '',
      },
      commentsByOffer,
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <Reviews offerId={0} />
        </Provider>,
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('When user is authorized', () => {
    const store = mockStore({
      authorization: {
        authorizationStatus: AuthorizationStatus.AUTH,
      },
      userData: {
        email: 'name@gmail.com',
      },
      commentsByOffer,
    });

    const tree = renderer
      .create(
        <Provider store={store}>
          <Reviews offerId={0} />
        </Provider>,
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
