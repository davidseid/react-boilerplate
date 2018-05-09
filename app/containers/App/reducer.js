import { fromJS } from 'immutable';

import {
  SAVE_ENTRY_SUCCESS,
  SAVE_ENTRY,
  SAVE_ENTRY_ERROR,
  LOAD_JOURNAL,
  LOAD_JOURNAL_SUCCESS,
  LOAD_JOURNAL_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  saving: false,
  error: false,
  journal: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ENTRY:
      return state
        .set('saving', true)
        .set('error', false);
    case SAVE_ENTRY_SUCCESS:
      return state
        .set('saving', false);
    case SAVE_ENTRY_ERROR:
      return state
        .set('error', action.error)
        .set('saving', false);
    case LOAD_JOURNAL:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_JOURNAL_SUCCESS:
      return state
        .set('journal', action.journal)
        .set('loading', false);
    case LOAD_JOURNAL_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
