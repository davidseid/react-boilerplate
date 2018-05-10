import { fromJS } from 'immutable';

import {
  selectEntryPage,
  makeSelectEntry,
} from '../selectors';

describe('selectEntryPage', () => {
  it('should select the EntryPage state', () => {
    const entryPageState = fromJS({
      data: {},
    });
    const mockedState = fromJS({
      entryPage: entryPageState,
    });
    expect(selectEntryPage(mockedState)).toEqual(entryPageState);
  });
});

describe('makeSelectEntry', () => {
  const entrySelector = makeSelectEntry();
  it('should select the entry', () => {
    const entry = 'Sample Entry';
    const mockedState = fromJS({
      entryPage: {
        entry,
      },
    });
    expect(entrySelector(mockedState)).toEqual(entry);
  });
});
