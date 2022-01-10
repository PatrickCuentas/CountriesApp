export const getNativeName = (nativeName = {}) => {
  const keys = Object.keys(nativeName);
  const nativeNamesFiltered = keys.map((key) => {
    return nativeName[key].common;
  });
  return nativeNamesFiltered.join(",");
};
