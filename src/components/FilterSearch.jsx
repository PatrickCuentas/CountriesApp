import { DownArrow } from "../icons/DownArrow";

const endpoint = (value) => {
  return `https://restcountries.com/v3.1/region/${value}`;
};

export const FilterSearch = ({ setCountriesData }) => {
  const loadData = async (endpoint) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setCountriesData((prev) => ({
      ...prev,
      loading: true,
      error: null,
    }));

    setCountriesData({
      data,
      loading: false,
      error: null,
    });
  };

  const handleSelectChange = (e) => {
    const value = e.target.options[e.target.options.selectedIndex].value;
    if (value === "Filter by Region") return;
    loadData(endpoint(value));
  };

  return (
    <div className="relative self-start">
      <DownArrow />
      <select
        onChange={handleSelectChange}
        className=" bg-white dark:bg-dark-blue dark:text-white  border border-gray-300 rounded-xl text-[#1B1A1D] h-16 pl-5 pr-20 focus:outline-none appearance-none border-none shadow-lg font-semibold "
      >
        <option>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};
