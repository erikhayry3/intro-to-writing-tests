import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Basket from "./Basket";

describe("Basket", () => {
  it("should call onClick callback", async () => {
    const onClickSpy = jest.fn();

    const { getByRole } = render(<Basket onClick={onClickSpy} />);

    await userEvent.click(getByRole("button", { name: "Add to basket" }));

    expect(onClickSpy).toHaveBeenCalledWith(1);
  });

  it.todo("tab");
  it.todo("tab + enter");
  it.todo("type");
});
