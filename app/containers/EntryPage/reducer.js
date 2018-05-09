import { fromJS } from 'immutable';

import {
  CHANGE_ENTRY,
} from './constants';

const initialState = fromJS({
  entry: '',
});

function entryPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ENTRY:

      return state
        .set('entry', action.entry);
    default:
      return state;
  }
}

export default entryPageReducer;
