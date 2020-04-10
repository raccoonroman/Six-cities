import MockAdapter from 'axios-mock-adapter';
import createAPI from '@/api';
import { loadOffers } from '@/operations';
import { ActionType } from '@/const';


const api = createAPI(() => {});

describe('Operations work correctly', () => {
  it('Should make a correct API call to /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = loadOffers();

    apiMock
      .onGet('/hotels')
      .reply(200, [{ fake: true }]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{ fake: true }],
        });
      });
  });
});
