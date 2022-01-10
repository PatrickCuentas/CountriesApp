export const endpoints = {
  all: "https://restcountries.com/v3.1/all",
  name: (name) => `https://restcountries.com/v3.1/name/${name}?fullText=true`,
  nameHalf: (name) => `https://restcountries.com/v3.1/name/${name}`,
  code: (code) => `https://restcountries.com/v3.1/alpha/${code}`,
  codeList: (arr) => `https://restcountries.com/v3.1/alpha?codes=${arr?.join(",")}`,
};

