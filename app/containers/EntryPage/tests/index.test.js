import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HomePage from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});

// should render formatted message
// should render form
// should render Input
// should submit form on enter
// onChangeEntry should be injected
// changeEntyr should be dispatched
// onSubmitForm should be injected
// should dispatch

