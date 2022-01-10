export const getLanguages = (languages = {}) => {
  const keys = Object.keys(languages);

  const languagesFiltered = keys.map((key) => {
    return languages[key];
  });

  return languagesFiltered.join(",");
};
