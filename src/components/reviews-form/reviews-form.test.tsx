import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReviewsForm from '@/components/reviews-form';


const mockStore = configureStore([]);

it('Render <ReviewsForm />', () => {
  const store = mockStore({});

  const tree = renderer
    .create(
      <Provider store={store}>
        <ReviewsForm offerId={0} />
      </Provider>,
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
