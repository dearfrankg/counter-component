import React from "react";
import Counter from ".";

describe("counter component", () => {
  it("should render", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should handle button clicks correctly", () => {
    const wrapper = shallow(<Counter />);

    const simulateButtonClick = index =>
      wrapper
        .find("button")
        .at(index)
        .simulate("click");

    const clickMinus = simulateButtonClick.bind(this, 0);
    const clickPlus = simulateButtonClick.bind(this, 1);

    const getCount = () =>
      wrapper
        .text()
        .split("")
        .slice(1, -1)
        .join("");

    expect(getCount()).toBe("0");

    clickPlus();
    expect(getCount()).toBe("1");

    clickPlus();
    expect(getCount()).toBe("2");

    clickMinus();
    clickMinus();
    clickMinus();
    clickMinus();
    clickMinus();
    expect(getCount()).toBe("-3");
  });
});
