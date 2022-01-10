import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { endpoints } from "../data/endpoints.js";
import { useForm } from "../hooks/useForm.jsx";
import { SearchIcon } from "../icons/SearchIcon.jsx";
export const InputSearch = () => {
  const [countryName, setcountryName] = useState("");
  const history = useHistory();
  const [inputValue, handleInputChange] = useForm({
    query: "",
  });
  const { query } = inputValue;

  const handleSubmit = (e) => {
    e.preventDefault();
    const endpoint = endpoints.nameHalf(query);
    loadData(endpoint, setcountryName);
  };

  useEffect(() => {
    !!countryName
      ? history.push(`/${countryName.toLowerCase()}`)
      : countryName === null
      ? alert(`No se encontro resultados para ${query}`)
      : null;
  }, [countryName]);

  const loadData = async (endpoint, setcountryName) => {
    const response = await fetch(endpoint);
    const data = await response.json();
    if (data.length) {
      setcountryName(data[0].name.common);
    } else {
      setcountryName(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <button className="absolute left-10 top-6" type="submit">
          <SearchIcon />
        </button>
        <input
          onChange={handleInputChange}
          name="query"
          value={query}
          className="dark:bg-dark-blue text-dark-gray dark:text-white font-semibold w-full py-6 px-20 md:pr-64 shadow-xl rounded-xl"
          type="text"
          placeholder="Search for a country..."
          autoComplete="off"
        />
      </div>
    </form>
  );
};
