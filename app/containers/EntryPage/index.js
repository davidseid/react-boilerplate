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

import Input from 'components/Input';
import messages from './messages';

export default class EntryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
