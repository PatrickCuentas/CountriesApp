export const getCurrencies = (currencies = {}) => {
  const keys = Object.keys(currencies);
  const currenciesFiltered = keys.map((key) => {
    return currencies[key]?.name;
  });
  return currenciesFiltered.join(",");
};
