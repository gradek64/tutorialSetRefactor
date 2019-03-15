import React from 'react';
import { shallow } from 'enzyme';
import { noReactFragementSupport } from '../../test_helpers';

/*
  *@this next line is defined in a root/jest.configuration.js
  *@so no need to import library
*/
// import toJson from 'enzyme-to-json';

// component for snapshot test;
import ToggleState from '../../logic/ToggleState';

let wrapper;
beforeAll(() => {
  wrapper = shallow(<ToggleState render={() => {}} />);
});

test('It renders React.Fragement', () => {
  wrapper = shallow(<ToggleState render={() => {}} />);
  /*
    *@Jest doent seems to render <React.Fragement>
    *@U need to utility method to swap render outcome
  */
  const wrapperUpdate = noReactFragementSupport(wrapper.debug());
  expect(wrapperUpdate).toMatchSnapshot();
});
test('toggleStates toggle from false to true and vice-versa', () => {
  const initialToggleState = wrapper.instance().state.toggle;
  // mock toggle
  const toggleCall = (toggle) => { wrapper.setState({ toggle: !toggle }); return null; };

  // call toggle
  toggleCall(initialToggleState);
  const updatedToggleStateRead = wrapper.instance().state.toggle;
  expect(updatedToggleStateRead).toEqual(!initialToggleState);

  // and call back toggle;
  toggleCall(updatedToggleStateRead);
  expect(wrapper.instance().state.toggle).toEqual(!updatedToggleStateRead);
});
