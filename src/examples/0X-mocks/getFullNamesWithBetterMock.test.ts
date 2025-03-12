import getFullNames from "./getFullNames";

const NAME_MOCK_1 = {
  firstName: "NAME_MOCK_1_FIRST_NAME",
  lastName: "NAME_MOCK_1_LAST_NAME",
};

const NAME_MOCK_2 = {
  firstName: "NAME_MOCK_2_FIRST_NAME",
  lastName: "NAME_MOCK_2_LAST_NAME",
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
