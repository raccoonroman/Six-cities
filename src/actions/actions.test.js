import * as actions from './index';
import {ActionType, AuthorizationStatus} from '../const';


const mock = [
  {
    id: 1,
    key1: `value1`,
  },
  {
    id: 2,
    key2: `value2`,
  },
  {
    id: 3,
    key3: `value3`,
  },
];

describe(`Action creators work correctly`, () => {
  it(`Action creator for loading offers returns correct action`, () => {
    expect(actions.loadOffers([])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [],
    });

    expect(actions.loadOffers(mock)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: mock,
    });
  });

  it(`Action creator for setting city returns correct action`, () => {
    expect(actions.setCity(`cityName`)).toEqual({
      type: ActionType.SET_CITY,
      payload: `cityName`,
    });

    expect(actions.setCity(`anotherCity`)).toEqual({
      type: ActionType.SET_CITY,
      payload: `anotherCity`,
    });
  });

  it(`Action creator for require authorization returns correct action`, () => {
    expect(actions.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(actions.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for setting email returns correct action`, () => {
    expect(actions.setEmail(`email`)).toEqual({
      type: ActionType.SET_EMAIL,
      payload: `email`,
    });

    expect(actions.setEmail(`name@gmail.com`)).toEqual({
      type: ActionType.SET_EMAIL,
      payload: `name@gmail.com`,
    });
  });

  it(`Action creator for loading comments returns correct action`, () => {
    expect(actions.loadComments([])).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: [],
    });

    expect(actions.loadComments(mock)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: mock,
    });
  });

  it(`Action creator for loading nearby offers returns correct action`, () => {
    expect(actions.loadNearbyOffers([])).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: [],
    });

    expect(actions.loadNearbyOffers(mock)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: mock,
    });
  });

  it(`Action creator for updating offers returns correct action`, () => {
    expect(actions.updateOffer({})).toEqual({
      type: ActionType.UPDATE_OFFER,
      payload: {},
    });

    expect(actions.updateOffer({
      id: 1,
      key1: `some value`,
    })).toEqual({
      type: ActionType.UPDATE_OFFER,
      payload: {
        id: 1,
        key1: `some value`,
      },
    });
  });
});
