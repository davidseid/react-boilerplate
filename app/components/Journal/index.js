/**
*
* Journal
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import JournalEntry from 'components/JournalEntry';

const Journal = ({ loading, error, journal }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (journal !== false) {
    return <List items={journal} component={JournalEntry} />;
  }

  return null;
};

Journal.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  journal: PropTypes.any,
};

export default Journal;
