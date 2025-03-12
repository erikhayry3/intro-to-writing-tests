import { testMe } from "./test";

describe("test", () => {
  it("should return test", () => {
    expect(testMe("test?")).toBe("test?");
  });
});
