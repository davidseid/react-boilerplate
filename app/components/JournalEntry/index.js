/**
*
* JournalEntry
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';

export default class JournalEntry extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;

    const content = (
      <div>
        {item.content}
      </div>
    );

    return (
      <ListItem key={`journal-entry-${item.id}`} index={this.props.index} item={content} />
    );
  }
}

JournalEntry.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};
