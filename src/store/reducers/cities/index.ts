import { DEFAULT_CITIES } from '@/const';
import ActionType from '@/store/actions/types';
import { InitialState, Action } from '@/store/reducers/cities/types';
import { getCitiesByOffers } from '@/utils';

const initialState: InitialState = {
  currentCity: DEFAULT_CITIES[0],
  cities: DEFAULT_CITIES,
};


const cities = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS: {
      const allCities = getCitiesByOffers(action.payload);
      return {
        currentCity: allCities[0],
        cities: allCities,
      };
    }
    case ActionType.SET_CITY: {
      return { ...state, currentCity: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default cities;
