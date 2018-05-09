import {
  CHANGE_ENTRY,
} from './constants';

export function changeEntry(entry) {
  return {
    type: CHANGE_ENTRY,
    entry,
  };
}
