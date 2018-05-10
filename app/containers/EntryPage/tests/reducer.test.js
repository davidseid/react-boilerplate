import { fromJS } from 'immutable';

import entryPageReducer from '../reducer';
import { changeEntry } from '../actions';

describe('entryPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      entry: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(entryPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeEntry action correctly', () => {
    const entry = 'Sample Entry';
    const expectedResult = state.set('entry', entry);

    expect(entryPageReducer(state, changeEntry(entry))).toEqual(expectedResult);
  });
});

