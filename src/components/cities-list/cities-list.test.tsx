import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CitiesList from '@/components/cities-list';


const mockStore = configureStore([]);

const cities: string[] = ['Kyiv', 'Kharkiv', 'Odessa', 'Vinnytsia', 'Lviv'];
const currentCity = 'Vinnytsia';


it('Render <CitiesList />', () => {
  const store = mockStore({
    cities: {
      cities,
    },
  });

  const tree = renderer.create(
    <Provider store={store}>
      <CitiesList currentCity={currentCity} />
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
