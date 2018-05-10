import React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { mount } from 'enzyme';

import { saveEntry } from 'containers/App/actions';
import { changeEntry } from '../actions';
import { EntryPage, mapDispatchToProps } from '../index';
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

  it('should save entry when form submitted', () => {
    const submitSpy = jest.fn();
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <EntryPage
          entry="Not empty"
          onChangeEntry={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    renderedComponent.find('form').simulate('submit');
    expect(submitSpy).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  describe('onChangeEntry', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onChangeEntry).toBeDefined();
    });

    it('should dispatch changeEntry when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const entry = 'Test Entry';
      result.onChangeEntry({ target: { value: entry } });
      expect(dispatch).toHaveBeenCalledWith(changeEntry(entry));
    });
  });

  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmitForm).toBeDefined();
    });

    it('should dispatch saveEntry when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSubmitForm();
      expect(dispatch).toHaveBeenCalledWith(saveEntry());
    });
  });
});
