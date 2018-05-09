import { createSelector } from 'reselect';

const selectEntryPage = (state) => state.get('entryPage');

const makeSelectEntry = () => createSelector(
  selectEntryPage,
  (entryPageState) => entryPageState.get('entry')
);

export {
  selectEntryPage,
  makeSelectEntry,
};
