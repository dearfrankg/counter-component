import React from "react";
import Demo from ".";

describe("demo component", () => {
  it("should render", () => {
    const wrapper = shallow(<Demo />);
    expect(wrapper.exists()).toBe(true);
  });
});
