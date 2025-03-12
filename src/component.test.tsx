import { Component } from "./component";
import { render } from "@testing-library/react";

describe("component", () => {
  it("should return component", () => {
    const { getByText } = render(<Component />);

    expect(getByText("Component")).toBeInTheDocument();
  });
});
