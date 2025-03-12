import mapToString from "./mapToString";

describe("mapToString", () => {
  it("should convert numbers to strings - one liner", () => {
    expect(mapToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  it("should convert numbers to strings - variables", () => {
    const numbers = [1, 2, 3];
    const expected = ["1", "2", "3"];
    const result = mapToString(numbers);

    expect(result).toEqual(expected);
  });

  it("should convert numbers to strings - specific", () => {
    const numbers = [1, 2, 3];
    const [one, two, three] = mapToString(numbers);

    // What makes this test worse than the others?
    expect(one).toEqual("1");
    expect(two).toEqual("2");
    expect(three).toEqual("3");
  });

  it.skip("should convert numbers to strings - snapshot", () => {
    expect(mapToString([1, 2, 3])).toMatchSnapshot();
    // expect(mapToString([1, 2, 3])).toMatchInlineSnapshot();
  });

  // Add to code and show how to use code coverage
  it.skip("should return empty array if no numbers", () => {
    //expect(mapToString()).toEqual([]);
  });
});
