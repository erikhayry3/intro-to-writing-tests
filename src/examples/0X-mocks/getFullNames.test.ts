import getFullNames from "./getFullNames";

describe("getFullNames", () => {
  it("should return full names", () => {
    // Arrange
    const names = [
      { firstName: "John", lastName: "Doe" },
      { firstName: "Jane", lastName: "Smith" },
    ];
    const expected = ["John Doe", "Jane Smith"];

    // Act
    const result = getFullNames(names);

    // Assert
    expect(result).toEqual(expected);
  });
});
