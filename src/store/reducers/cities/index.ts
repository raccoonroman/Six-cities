/* eslint-disable no-param-reassign */
import produce from 'immer';
import LoadOffers from '@/store/actions/load-offers/types';
import SET_CITY from '@/store/actions/set-city/types';
import { DEFAULT_CITIES } from '@/const';
import { CitiesState, CitiesActions } from '@/store/reducers/cities/types';
import { getCitiesByRawOffers } from '@/utils';

const initialState: CitiesState = {
  loadOffersStatus: {
    pending: false,
    resolve: false,
    reject: false,
  },
  currentCity: DEFAULT_CITIES[0],
  cities: DEFAULT_CITIES,
};

export default (state = initialState, action: CitiesActions) => produce(state, (draft) => {
  switch (action.type) {
    case LoadOffers.PENDING: {
      draft.loadOffersStatus.pending = true;
      draft.loadOffersStatus.resolve = false;
      draft.loadOffersStatus.reject = false;
      break;
    }
    case LoadOffers.RESOLVE: {
      const offers = action.payload;
      const allCities = getCitiesByRawOffers(offers);
      const [firstCity] = allCities;
      draft.loadOffersStatus.pending = false;
      draft.loadOffersStatus.resolve = true;
      draft.currentCity = firstCity;
      draft.cities = allCities;
      break;
    }
    case LoadOffers.REJECT: {
      draft.loadOffersStatus.pending = false;
      draft.loadOffersStatus.reject = true;
      break;
    }
    case SET_CITY: {
      draft.currentCity = action.payload;
    }

    // skip default
  }
});
