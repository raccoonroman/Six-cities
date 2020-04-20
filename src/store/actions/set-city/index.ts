import SET_CITY from '@/store/actions/set-city/types';
import { createAction } from '@/store/actions/common';

export default (cityName: string) => createAction(SET_CITY, cityName);
