import { render } from "@testing-library/react";
import Basket from "./Basket";

describe("Basket", () => {
  it("should call onload callback - simple", () => {
    const onLoadSpy = jest.fn();

    render(<Basket onLoad={onLoadSpy} />);

    expect(onLoadSpy).not.toHaveBeenCalled();
    expect(onLoadSpy).toHaveBeenCalledTimes(2);
    expect(onLoadSpy).toHaveBeenCalledWith(1000);
  });

  it("should call onload callback 3 times", () => {
    const onLoadSpy = jest.fn();

    render(<Basket onLoad={onLoadSpy} />);

    expect(onLoadSpy).toHaveBeenCalledTimes(3);
    expect(onLoadSpy).toHaveBeenCalledWith(1);
    expect(onLoadSpy).toHaveBeenCalledWith(2);
    expect(onLoadSpy).toHaveBeenCalledWith(3);
  });

  it("should call onload callback 3 times - check order", () => {
    const onLoadSpy = jest.fn();

    render(<Basket onLoad={onLoadSpy} />);

    expect(onLoadSpy).toHaveBeenCalledTimes(3);

    expect(onLoadSpy.mock.calls[0][0]).toEqual(1);
    expect(onLoadSpy.mock.calls[1][0]).toEqual(2);
    expect(onLoadSpy.mock.calls[2][0]).toEqual(3);

    expect(onLoadSpy.mock.calls).toEqual([[1], [2], [3]]);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
});
