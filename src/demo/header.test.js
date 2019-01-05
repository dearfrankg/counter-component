import React from "react";
import Header from ".";
import pkg from "../../package.json";

describe("header component", () => {
  it("should render", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render component name correctly", () => {
    const wrapper = mount(<Header />);
    const getName = () => wrapper.find(".app-link").text();
    expect(getName()).toBe(pkg.name);
  });
});
