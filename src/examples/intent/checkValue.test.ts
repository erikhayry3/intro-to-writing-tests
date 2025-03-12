import checkValue from "./checkValue";

describe("checkValue.js", () => {
  it("should return return true if value is option 1", () => {
    expect(checkValue("option1")).toBe(true);
  });

  it("should return return false for other values than option 1", () => {
    expect(checkValue("option2")).toBe(false);
    expect(checkValue("option3")).toBe(false);
    expect(checkValue()).toBe(false);
  });
});
