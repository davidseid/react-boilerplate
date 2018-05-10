import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SAVE_ENTRY } from 'containers/App/constants';
import { entrySaved, entrySavingError } from 'containers/App/actions';

import axios from 'axios';
import { makeSelectEntry } from 'containers/EntryPage/selectors';

export function* storeEntry() {
  const entry = yield select(makeSelectEntry());
  const requestURL = 'http://localhost:3000/api/journal';

  try {
    yield call(axios.post, requestURL, { entry });
    yield put(entrySaved());
  } catch (err) {
    yield put(entrySavingError(err));
  }
}

export default function* saveData() {
  yield takeLatest(SAVE_ENTRY, storeEntry);
}
