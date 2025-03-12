function getFullNames(names: { firstName: string; lastName: string }[]) {
  return names.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

export default getFullNames;
