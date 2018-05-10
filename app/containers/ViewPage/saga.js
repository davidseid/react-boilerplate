import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_JOURNAL } from 'containers/App/constants';
import { journalLoaded, journalLoadingError } from 'containers/App/actions';

import axios from 'axios';

export function* fetchJournal() {
  const requestURL = 'http://localhost:3000/api/journal';

  try {
    const journal = yield call(axios.get, requestURL, {});
    console.log(journal.data);
    yield put(journalLoaded(journal.data));
  } catch (err) {
    yield put(journalLoadingError(err));
  }
}

export default function* APIData() {
  yield takeLatest(LOAD_JOURNAL, fetchJournal);
}
