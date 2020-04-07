import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {SortType} from '../../const';
import Sorting from './sorting';


const handleSortTypeChange = () => {
  // do nothing
};

it(`Should <Sorting /> render correctly`, () => {
  const tree = renderer
    .create(
        <Sorting
          sortBy={SortType.POPULAR}
          onSortTypeChange={handleSortTypeChange}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
