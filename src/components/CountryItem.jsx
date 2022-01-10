import { endpoints } from "../data/endpoints";
import { useFetch } from "../hooks/useFetch";
import { getCurrencies } from "../utilities/getCurrencies";
import { getLanguages } from "../utilities/getLanguages";
import { getNativeName } from "../utilities/getNativeName";

export const CountryItem = (data) => {
  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    tld,
    borders,
  } = data;
  let borderCountriesList = null;
  let loadingStatus = false;
  if (!!borders) {
    const [state] = useFetch(endpoints.codeList(borders, []));
    const { data: borderData, loading } = state;
    borderCountriesList = borderData.map((border) => border?.name?.common);
    loadingStatus = loading;
  }
  const { png } = flags;
  const { common, nativeName } = name;
  const nativeNameList = getNativeName(nativeName);
  const languagesList = getLanguages(languages);
  const currenciesList = getCurrencies(currencies);
  return (
    <div className="flex flex-col lg:flex-row  gap-12 py-16">
      <div className="lg:min-w-[50vw]">
        <img className="aspect-video w-full" src={png} alt={png} />
      </div>
      <div className="flex flex-col gap-6 dark:text-white">
        <h2 className="text-3xl font-bold">{common}</h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-10 md:gap-28">
            <div className="space-y-2 text-lg font-semibold">
              {[
                ["Native Name", nativeNameList],
                ["Population", new Intl.NumberFormat().format(population)],
                ["Region", region],
                ["Sub Region", subregion],
                ["Capital", capital],
              ].map(([title, content]) => (
                <p key={title}>
                  {title}: <span className="font-normal">{content}</span>
                </p>
              ))}
            </div>
            <div className="space-y-2 text-lg font-semibold">
              {[
                ["Top Level Domain", tld],
                ["Currencies", currenciesList],
                ["Languages", languagesList],
              ].map(([title, content]) => (
                <p key={title}>
                  {title}: <span className="font-normal">{content}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 ">
            <h3 className="min-w-max text-lg font-semibold">
              Border Countries:
            </h3>
            <div
              className="flex gap-4 flex-wrap
                         text-center"
            >
              {!loadingStatus &&
                (!!borderCountriesList ? (
                  borderCountriesList.map((title) => (
                    <div key={title} className="light-shadow dark:dark-shadow">
                      {title}
                    </div>
                  ))
                ) : (
                  <p>No border countries for {common}</p>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
