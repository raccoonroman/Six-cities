import * as React from 'react';
import cn from 'classnames';
import {SortType} from '../../const';
import withListOpenState from '../../hocs/with-list-open-state/with-list-open-state';


interface Props {
  sortBy: string;
  sortListOpened: boolean;
  onSortTypeClick: () => void;
  onSortItemClick: (sortType: string) => (event: React.MouseEvent) => void;
}

const Sorting: React.FunctionComponent<Props> = (props: Props) => {
  const {sortBy, sortListOpened, onSortTypeClick, onSortItemClick} = props;

  const sortListClass = cn({
    'places__options places__options--custom': true,
    'places__options--opened': sortListOpened,
  });

  const renderSortItems = () => {
    const sortTypes = Object.values(SortType);

    return sortTypes.map((sortType: string) => {
      const sortItemClass = cn({
        'places__option': true,
        'places__option--active': sortType === sortBy,
      });
      return (
        <li
          key={sortType}
          onClick={onSortItemClick(sortType)}
          className={sortItemClass}
          tabIndex={0}
        >
          {sortType}
        </li>
      );
    });
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={onSortTypeClick} className="places__sorting-type" tabIndex={0}>
        {sortBy}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={sortListClass}>{renderSortItems()}</ul>
    </form>
  );
};

export default withListOpenState(Sorting);
