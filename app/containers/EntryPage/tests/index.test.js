import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { mount } from 'enzyme';
// import { mountWithIntl } from 'helpers/intl-enzyme-test-helper';


import { EntryPage } from '../index';
import messages from '../messages';

describe('<EntryPage />', () => {
  it('should render the entry page header message', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <EntryPage />
      </IntlProvider>
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});

// should render form
// should render Input
// should submit form on enter
// onChangeEntry should be injected
// changeEntyr should be dispatched
// onSubmitForm should be injected
// should dispatch

