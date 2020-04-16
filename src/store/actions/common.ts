import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import Api from '@/api';
import { State, Actions } from '@/store/reducers/types';

export type AsyncAction = ThunkAction<void, State, Api, Actions>;
export type Dispatch = ThunkDispatch<State, Api, Actions>;
