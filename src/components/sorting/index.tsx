import React, { useState } from 'react';
import cn from 'classnames';
import { SortType } from '@/const';


interface Props {
  sortBy: SortType;
  onSortTypeChange: (sortType: SortType) => void;
}

const Sorting: React.FC<Props> = ({ sortBy, onSortTypeChange }) => {
  const [sortListOpened, setSortListOpened] = useState<boolean>(false);

  const handleSortTypeClick = () => {
    setSortListOpened(!sortListOpened);
  };

  const handleSortItemClick = (sortType: SortType) => () => {
    setSortListOpened(false);
    onSortTypeChange(sortType);
  };

  const sortListClass = cn('places__options places__options--custom', {
    'places__options--opened': sortListOpened,
  });

  const renderSortItems = () => {
    const sortTypes = Object.values(SortType);

    return sortTypes.map((sortType) => {
      const sortItemClass = cn('places__option', {
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
    <div className="places__sorting">
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
    </div>
  );
};

export default Sorting;
