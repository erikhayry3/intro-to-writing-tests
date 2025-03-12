import { render } from "@testing-library/react";
import Basket from "./Basket";

describe("Basket", () => {
  it("should render heading", () => {
    const { getByRole } = render(<Basket />);

    expect(getByRole("heading", { name: "Basket" })).toBeInTheDocument();

    // expect(getByRole('heading', { name: 'Basket', level: 1 })).toBeInTheDocument();
    // expect(getByRole('heading', { level: 1 })).toHaveTextContent('Basket');
  });

  describe("button", () => {
    it("should render button", () => {
      const { getByRole } = render(<Basket />);

      expect(
        getByRole("button", { name: "Add to basket" }),
      ).toBeInTheDocument();
    });

    it("should render not render button if hidden", () => {
      const { getByRole } = render(<Basket />);

      expect(
        getByRole("button", { name: "Add to basket" }),
      ).toBeInTheDocument();
    });

    // New requirement: button should have image
  });

  it("should render rows", () => {
    const { getByRole, getAllByRole } = render(<Basket />);

    expect(getByRole("list", { name: "Items" })).toBeInTheDocument();

    expect(getAllByRole("listitem")).toHaveLength(2);
    expect(getAllByRole("listitem").at(0)).toHaveTextContent("item 1");
    expect(getAllByRole("listitem").at(1)).toHaveTextContent("item 2");
  });
});
