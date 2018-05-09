/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Input from 'components/Input';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';
import { saveEntry } from '../App/actions';
import { changeEntry } from './actions';
import { makeSelectEntry } from './selectors';

export class EntryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <form onSubmit={this.props.onSubmitForm}>
          <label htmlFor="entry">
            <Input
              id="entry"
              type="text"
              placeholder="Write a journal entry here..."
              value={this.props.entry}
              onChange={this.props.onChangeEntry}
            />
          </label>
        </form>
      </div>
    );
  }
}

EntryPage.propTypes = {
  onSubmitForm: PropTypes.func,
  entry: PropTypes.string,
  onChangeEntry: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEntry: (evt) => dispatch(changeEntry(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(saveEntry());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  entry: makeSelectEntry(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'entryPage', reducer });
const withSaga = injectSaga({ key: 'entryPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EntryPage);
