import getFullNames from "./getFullNames";

const NAME_MOCK_1 = {
  firstName: "John",
  lastName: "Doe",
};

const NAME_MOCK_2 = {
  firstName: "Jane",
  lastName: "Smith",
};

describe("getFullNames", () => {
  it("should return full names", () => {
    // Arrange
    const names = [
      { firstName: NAME_MOCK_1.firstName, lastName: NAME_MOCK_1.lastName },
      { firstName: NAME_MOCK_2.firstName, lastName: NAME_MOCK_2.lastName },
    ];
    const expected = [
      `${NAME_MOCK_1.firstName} ${NAME_MOCK_1.lastName}`,
      `${NAME_MOCK_2.firstName} ${NAME_MOCK_2.lastName}`,
    ];

    // Act
    const result = getFullNames(names);

    // Assert
    expect(result).toEqual(expected);
  });
});
