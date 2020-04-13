import React from 'react';
import cn from 'classnames';
import { SortType } from '@/const';


interface Props {
  sortBy: string;
  onSortTypeChange: (sortType: string) => void;
}

const Sorting: React.FunctionComponent<Props> = (props: Props) => {
  const { sortBy, onSortTypeChange } = props;
  const [sortListOpened, setSortListOpened] = React.useState(false);

  const handleSortTypeClick = () => {
    setSortListOpened(!sortListOpened);
  };

  const handleSortItemClick = (sortType: string) => () => {
    setSortListOpened(false);
    onSortTypeChange(sortType);
  };

  const sortListClass = cn({
    'places__options places__options--custom': true,
    'places__options--opened': sortListOpened,
  });

  const renderSortItems = () => {
    const sortTypes = Object.values(SortType);

    return sortTypes.map((sortType: string) => {
      const sortItemClass = cn({
        places__option: true,
        'places__option--active': sortType === sortBy,
      });
      return (
        <li
          key={sortType}
          onClick={handleSortItemClick(sortType)}
          onKeyDown={handleSortItemClick(sortType)}
          className={sortItemClass}
        >
          {sortType}
        </li>
      );
    });
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        onClick={handleSortTypeClick}
        onKeyDown={handleSortTypeClick}
        className="places__sorting-type"
        role="button"
        tabIndex={0}
      >
        {sortBy}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={sortListClass}>{renderSortItems()}</ul>
    </form>
  );
};

export default Sorting;
