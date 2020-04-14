import { combineReducers } from 'redux';
import authorization from '@/store/reducers/authorization';
import cities from '@/store/reducers/cities';
import commentsByOffer from '@/store/reducers/comments-by-offer';
import nearbyOffers from '@/store/reducers/nearby-offers';
import offers from '@/store/reducers/offers';
import userData from '@/store/reducers/user-data';

export {
  offers,
  cities,
  authorization,
  userData,
  commentsByOffer,
  nearbyOffers,
};

export default combineReducers({
  authorization,
  cities,
  commentsByOffer,
  nearbyOffers,
  offers,
  userData,
});
