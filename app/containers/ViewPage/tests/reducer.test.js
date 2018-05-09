
import { fromJS } from 'immutable';
import viewPageReducer from '../reducer';

describe('viewPageReducer', () => {
  it('returns the initial state', () => {
    expect(viewPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
