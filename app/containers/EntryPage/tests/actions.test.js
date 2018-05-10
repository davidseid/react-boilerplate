import {
  CHANGE_ENTRY,
} from '../constants';

import {
  changeEntry,
} from '../actions';

describe('EntryPage Actions', () => {
  describe('changeEntry', () => {
    it('should return the correct type and the passed in entry', () => {
      const entry = 'Sample Entry';
      const expectedResult = {
        type: CHANGE_ENTRY,
        entry,
      };

      expect(changeEntry(entry)).toEqual(expectedResult);
    });
  });
});
