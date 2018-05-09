import { createSelector } from 'reselect';

/**
 * Direct selector to the viewPage state domain
 */
const selectViewPageDomain = (state) => state.get('viewPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ViewPage
 */

const makeSelectViewPage = () => createSelector(
  selectViewPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectViewPage;
export {
  selectViewPageDomain,
};
