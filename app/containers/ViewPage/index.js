/**
 *
 * ViewPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectViewPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export class ViewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        Journal
      </div>
    );
  }
}

ViewPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  viewPage: makeSelectViewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'viewPage', reducer });
const withSaga = injectSaga({ key: 'viewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewPage);
