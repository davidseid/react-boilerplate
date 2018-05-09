import {
  SAVE_ENTRY,
  SAVE_ENTRY_SUCCESS,
  SAVE_ENTRY_ERROR,
} from './constants';

export function saveEntry() {
  return {
    type: SAVE_ENTRY,
  };
}

export function entrySaved() {
  return {
    type: SAVE_ENTRY_SUCCESS,
  };
}

export function entrySavingError(error) {
  return {
    type: SAVE_ENTRY_ERROR,
    error,
  };
}
