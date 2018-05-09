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

import { makeSelectJournal, makeSelectLoading, makeSelectSaving, makeSelectError } from 'containers/App/selectors';
import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
import saga from './saga';
import { loadJournal } from '../App/actions';


export class ViewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    return (
      <div>
        Journal
      </div>
    );
  }
}

ViewPage.propTypes = {
  onMount: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
      console.log('the onmount runs');
      dispatch(loadJournal());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  journal: makeSelectJournal(),
  saving: makeSelectSaving(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'viewPage', reducer });
const withSaga = injectSaga({ key: 'viewPage', saga });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(ViewPage);
