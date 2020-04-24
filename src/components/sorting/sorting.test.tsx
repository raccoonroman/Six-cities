import React from 'react';
import renderer from 'react-test-renderer';
import { SortType } from '@/const';
import Sorting from '@/components/sorting';


describe('Render <Sorting />', () => {
  it('with "popular" sort type', () => {
    const tree = renderer.create(
      <Sorting
        sortBy={SortType.POPULAR}
        onSortTypeChange={() => {}}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('with "top rated first" sort type', () => {
    const tree = renderer.create(
      <Sorting
        sortBy={SortType.TOP_RATED_FIRST}
        onSortTypeChange={() => {}}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
