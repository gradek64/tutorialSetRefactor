import React from 'react';
import { shallow } from 'enzyme';

/*
  *@this next line is defined in a root/jest.configuration.js
  *@so no need to import library
*/
// import toJson from 'enzyme-to-json';

// component for snapshot test;
import SimpleButton from '../../../functional/Simplebutton';

test('renders correctly', () => {
  const wrapper = shallow(<SimpleButton label="label" action={() => {}} />);

  // that would be with import of enzyme-to-json bu we got that in configuration
  // expect(toJson(wrapper)).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
});
