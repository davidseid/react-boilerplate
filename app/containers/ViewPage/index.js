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
import injectReducer from 'utils/injectReducer';
import Journal from 'components/Journal';
import saga from './saga';
import reducer from '../EntryPage/reducer';
import { loadJournal } from '../App/actions';


export class ViewPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onMount();
  }

  render() {
    const { loading, error, journal } = this.props;
    const journalProps = {
      loading,
      error,
      journal,
    };
    return (
      <div>
        <Journal {...journalProps} />
      </div>
    );
  }
}

ViewPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  journal: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onMount: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onMount: () => {
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

const withReducer = injectReducer({ key: 'viewPage', reducer });
const withSaga = injectSaga({ key: 'viewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ViewPage);
