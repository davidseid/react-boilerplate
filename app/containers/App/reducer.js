import { fromJS } from 'immutable';

import {
  SAVE_ENTRY_SUCCESS,
  SAVE_ENTRY,
  SAVE_ENTRY_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  saving: false,
  error: false,
  currentEntry: false,
  journal: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_ENTRY:
      return state
        .set('saving', true)
        .set('error', false)
        .set('journal', false);
    case SAVE_ENTRY_SUCCESS:
      return state
        .set('saving', false)
        .set('currentEntry', action.entry);
    case SAVE_ENTRY_ERROR:
      return state
        .set('error', action.error)
        .set('saving', false);
    default:
      return state;
  }
}

export default appReducer;
