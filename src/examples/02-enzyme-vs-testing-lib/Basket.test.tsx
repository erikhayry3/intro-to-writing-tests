import { render } from "@testing-library/react";
import Basket from "./Basket";

// show enzyme example in 3app

describe("Basket", () => {
  it("should render heading", () => {
    const { getByRole, debug } = render(<Basket />);

    // logging the screen
    // console.log(debug());

    // a11y testing for free
    expect(getByRole("heading", { name: "Basket" })).toBeInTheDocument();

    // accessible roles error message
    expect(getByRole("heading", { name: "Items" })).toBeInTheDocument();

    // find roles
    //expect(getByRole("input??", { name: "Search" })).toBeInTheDocument();
  });
});
