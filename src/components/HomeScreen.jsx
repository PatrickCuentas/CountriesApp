import { InputSearch } from "./InputSearch.jsx";
import { FilterSearch } from "./FilterSearch.jsx";
import { CountryCard } from "./CountryCard.jsx";
import { useFetch } from "../hooks/useFetch.jsx";
import { endpoints } from "../data/endpoints.js";

export const HomeScreen = () => {
  const [countriesData, setCountriesData] = useFetch(endpoints.all, []);
  const { data: countries, loading } = countriesData;

  return (
    <main className="flex flex-col gap-12">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <InputSearch />
        <FilterSearch setCountriesData={setCountriesData} />
      </div>
      <section id="grid" className="mb-10 px-5 grid gap-10">
        {!loading &&
          countries.map((country) => {
            return <CountryCard key={country.name.common} {...country} />;
          })}
      </section>
    </main>
  );
};
