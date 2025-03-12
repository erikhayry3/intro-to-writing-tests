import { render, within } from "@testing-library/react";
import Employees from "./Employees";

describe("Employees", () => {
  it("should render list with image of all employees", () => {
    const { getByRole } = render(<Employees />);

    expect(getByRole("img", { name: "markus" })).toBeInTheDocument();
    // expect(getByRole('img', { name: 'erik' })).toBeInTheDocument();
    // expect(getByRole('img', { name: 'aleksandra' })).toBeInTheDocument();
  });

  it("should render list with image of all devs", () => {
    const { getByRole } = render(<Employees />);

    expect(
      within(getByRole("list", { name: "Developers" })).getByRole("img", {
        name: "erik",
      }),
    ).toBeInTheDocument();
    expect(
      within(getByRole("list", { name: "Developers" })).getByRole("img", {
        name: "aleksandra",
      }),
    ).toBeInTheDocument();
  });
});
