import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import Api from '@/api';
import { State, Actions } from '@/store/reducers/types';

export type AsyncAction = ThunkAction<void, State, Api, Actions>;
export type Dispatch = ThunkDispatch<State, Api, Actions>;


interface Action<T extends string> {
  type: T;
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function createAction<T, P>(type: T, payload?: P) {
  return payload ? { type, payload } : { type };
}
