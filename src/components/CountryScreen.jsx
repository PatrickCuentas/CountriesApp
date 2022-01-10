import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { endpoints } from "../data/endpoints";
import { useFetch } from "../hooks/useFetch";
import { LeftArrow } from "../icons/LeftArrow";
import { CountryItem } from "./CountryItem";

export const CountryScreen = () => {
  const endpointName = endpoints.name;
  const history = useHistory();
  const { countryId } = useParams();
  const [state] = useFetch(endpointName(countryId), []);
  const { data, loading } = state;
  const [countryData] = data;
  const handleReturn = () => {
    history.goBack();
  };

  return (
    !loading && (
      <>
        <button
          onClick={handleReturn}
          className=" text-very-light-blue dark:text-white bg-white dark:bg-dark-blue inline-flex gap-3 items-center py-[.5rem] pl-7 pr-10 shadow-lg focus:shadow-xl"
        >
          <span>
            <LeftArrow />
          </span>
          <span className="text-lg">Back</span>
        </button>

        <CountryItem key={countryData.name.common} {...countryData} />
      </>
    )
  );
};
