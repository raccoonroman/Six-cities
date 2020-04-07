import * as React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import {getCitiesList} from '../../selectors';
import {setCity} from '../../actions';


interface Props {
  cities: string[];
  currentCity: string;
  onCityChange: (cityName: string) => object;
}

const CitiesList: React.FC<Props> = (props: Props) => {
  const {cities, currentCity, onCityChange} = props;

  const getTabClass = (city) => cn({
    'locations__item-link tabs__item': true,
    'tabs__item--active': city === currentCity,
  });

  const handleCityTabClick = (city) => (evt) => {
    evt.preventDefault();
    onCityChange(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={city} className="locations__item">
          <a onClick={handleCityTabClick(city)} className={getTabClass(city)} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  cities: getCitiesList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChange(cityName) {
    dispatch(setCity(cityName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
