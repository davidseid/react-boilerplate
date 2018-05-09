import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectSaving = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('saving')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectJournal = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('journal')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectSaving,
  makeSelectError,
  makeSelectJournal,
  makeSelectLocation,
};
