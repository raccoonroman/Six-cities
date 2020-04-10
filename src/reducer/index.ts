import { combineReducers } from 'redux';
import { DEFAULT_CITIES, ActionType, AuthorizationStatus } from '@/const';
import { getCitiesByOffers, updateOffers } from '@/utils';


const InitialState = {
  CITIES: {
    currentCity: DEFAULT_CITIES[0],
    cities: DEFAULT_CITIES,
  },
  AUTHORIZATION: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  },
  USER_DATA: {
    email: '',
  },
};

const offers = (state = [], action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS: {
      return action.payload;
    }
    case ActionType.UPDATE_OFFER: {
      const newOffer = action.payload;
      const updatedOffers = updateOffers(state, newOffer);
      return updatedOffers;
    }
  }

  return state;
};

const cities = (state = InitialState.CITIES, action) => {
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
  }

  return state;
};

const authorization = (state = InitialState.AUTHORIZATION, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION: {
      return { ...state, authorizationStatus: action.payload };
    }
  }

  return state;
};

const userData = (state = InitialState.USER_DATA, action) => {
  switch (action.type) {
    case ActionType.SET_EMAIL: {
      return { ...state, email: action.payload };
    }
  }

  return state;
};

const commentsByOffer = (state = [], action) => {
  switch (action.type) {
    case ActionType.LOAD_COMMENTS: {
      return action.payload;
    }
  }

  return state;
};

const nearbyOffers = (state = [], action) => {
  switch (action.type) {
    case ActionType.LOAD_NEARBY_OFFERS: {
      return action.payload;
    }
    case ActionType.UPDATE_OFFER: {
      const newOffer = action.payload;
      const updatedOffers = updateOffers(state, newOffer);
      return updatedOffers;
    }
  }

  return state;
};


export {
  offers,
  cities,
  authorization,
  userData,
  commentsByOffer,
  nearbyOffers,
};

export default combineReducers({
  offers,
  cities,
  authorization,
  userData,
  commentsByOffer,
  nearbyOffers,
});
