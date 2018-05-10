import { put, takeLatest } from 'redux-saga/effects';

import { SAVE_ENTRY } from 'containers/App/constants';
import { entrySaved, entrySavingError } from 'containers/App/actions';

import saveData, { storeEntry } from '../saga';

const entry = 'Sample Entry';

/* eslint-disable redux-saga/yield-effects */
describe('storeEntry Saga', () => {
  let storeEntryGenerator;

  beforeEach(() => {
    storeEntryGenerator = storeEntry();

    const selectDescriptor = storeEntryGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = storeEntryGenerator.next(entry).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the entrySaved action if it saves the data successfully', () => {
    const putDescriptor = storeEntryGenerator.next().value;
    expect(putDescriptor).toEqual(put(entrySaved()));
  });

  it('should call the entrySavingError action if the action errors', () => {
    const response = new Error('Some error');
    const putDescriptor = storeEntryGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(entrySavingError(response)));
  });
});

describe('saveData Saga', () => {
  const saveDataSaga = saveData();

  it('should start task to watch for SAVE_ENTRY action', () => {
    const takeLatestDescriptor = saveDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SAVE_ENTRY, storeEntry));
  });
});
