export const prepareData = (users) =>
  Object.keys(users).reduce((acc, key) => ({ ...acc, [key]: users[key].value }), {});
