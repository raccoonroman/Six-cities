import { combineReducers } from 'redux';
import authorization from '@/store/reducers/authorization';
import cities from '@/store/reducers/cities';
import comments from '@/store/reducers/comments';
import nearbyOffers from '@/store/reducers/nearby-offers';
import offers from '@/store/reducers/offers';
import userData from '@/store/reducers/user-data';

export default combineReducers({
  authorization,
  cities,
  comments,
  nearbyOffers,
  offers,
  userData,
});
