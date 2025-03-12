import {
  act,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Basket from "./Basket";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

describe("Basket", () => {
  it("should show loader", () => {
    const { getByRole } = render(<Basket />);

    expect(getByRole("img", { name: "Is loading" })).toBeInTheDocument();
  });

  it.skip("should show basket after loading - fail", () => {
    const { getByRole } = render(<Basket />);

    expect(getByRole("heading", { name: "Basket" })).toBeInTheDocument();
  });

  it("should show basket after loading - findBy", async () => {
    const { findByRole } = render(<Basket />);

    expect(await findByRole("heading", { name: "Basket" })).toBeInTheDocument();
  });

  it("should show basket after loading - waitFor", async () => {
    const { getByRole } = render(<Basket />);

    await waitFor(async () => {
      expect(getByRole("heading", { name: "Basket" })).toBeInTheDocument();
    });
  });

  it("should show basket after loading - act and wait", async () => {
    const { getByRole } = render(<Basket />);

    // why is this a worse than the others?
    await act(() => wait(0));

    expect(getByRole("heading", { name: "Basket" })).toBeInTheDocument();
  });

  it("should show basket after loading - waitForElementToBeRemoved", async () => {
    const { getByRole } = render(<Basket />);

    await waitForElementToBeRemoved(getByRole("img", { name: "Is loading" }));

    expect(getByRole("heading", { name: "Basket" })).toBeInTheDocument();
  });

  // Requirements; show spinner for half a second, then show basket
  // Requirements; show spinner for 4 second, then show basket
  // Requirements; show spinner for 10 second, then show basket
});
