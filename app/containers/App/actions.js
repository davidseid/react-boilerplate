import {
  SAVE_ENTRY,
  SAVE_ENTRY_SUCCESS,
  SAVE_ENTRY_ERROR,
  LOAD_JOURNAL,
  LOAD_JOURNAL_SUCCESS,
  LOAD_JOURNAL_ERROR,
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

export function loadJournal() {
  return {
    type: LOAD_JOURNAL,
  };
}

export function journalLoaded(journal) {
  return {
    type: LOAD_JOURNAL_SUCCESS,
    journal,
  };
}

export function journalLoadingError(error) {
  return {
    type: LOAD_JOURNAL_ERROR,
    error,
  };
}
