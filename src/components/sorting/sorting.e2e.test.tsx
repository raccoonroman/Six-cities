import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SortType } from '@/const';
import Sorting from '@/components/sorting';

configure({ adapter: new Adapter() });

it('Click on sort type item', () => {
  const handleSortTypeChange = jest.fn();

  const sorting = shallow(
    <Sorting
      sortBy={SortType.TOP_RATED_FIRST}
      onSortTypeChange={handleSortTypeChange}
    />,
  );

  const popularSortItem = sorting.find('.places__option').at(0);

  popularSortItem.simulate('click');

  expect(handleSortTypeChange).toHaveBeenCalledTimes(1);
  expect(handleSortTypeChange.mock.calls[0][0]).toBe(SortType.POPULAR);
});
