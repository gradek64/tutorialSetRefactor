import React from "react";
import { shallow } from "enzyme";

import ProposalClassProperties from "./ProposalClassProperties";

test("renders correctly", () => {
  const wrapper = shallow(<ProposalClassProperties />);
  expect(wrapper).toMatchSnapshot();
});

beforeAll(() => {
  //spyOn window.scrollTo
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
});

const mockRef = (instance) => {
  //create myRef as mock
  instance.myRef.current = document.createElement("div");
  instance.myRef.current.scroll = jest.fn();
  instance.scrollParagraph = jest.fn();
  instance.scrollWindow = jest.fn();
};

fit("scrolls container after click button action", () => {
  const wrapper = shallow(<ProposalClassProperties />);
  const instance = wrapper.instance();
  mockRef(instance);

  const btnActionScroll = wrapper.find("button");
  btnActionScroll.simulate("click");

  //assertions
  expect(instance.scrollParagraph).toHaveBeenCalled();
  expect(instance.scrollWindow).toHaveBeenCalled();
});
