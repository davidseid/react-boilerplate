/**
*
* NavBar
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import Link from './Link';
import messages from './messages';

const NavBar = () => (
  <div>
    <Link to="/">
      <FormattedMessage {...messages.entryPage} />
    </Link>
  </div>
);

export default NavBar;
