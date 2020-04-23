import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { getCitiesList } from '@/store/selectors';
import setCity from '@/store/actions/set-city';


interface Props {
  currentCity: string;
}

const CitiesList: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const { currentCity } = props;

  const cities = useSelector(getCitiesList);

  const getTabClass = (city: string) => cn({
    'locations__item-link tabs__item': true,
    'tabs__item--active': city === currentCity,
  });

  const handleCityTabClick = (city: string) => (evt: React.MouseEvent) => {
    evt.preventDefault();
    dispatch(setCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a onClick={handleCityTabClick(city)} className={getTabClass(city)} href="#!">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CitiesList;
