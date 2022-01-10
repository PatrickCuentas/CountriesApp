import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const resetInitial = () => {
    setValues(initialState);
  };

  const reset = (target) => {
    setValues((prev) => ({
      ...prev,
      [target.name]: "",
    }));
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, resetInitial, reset];
};
