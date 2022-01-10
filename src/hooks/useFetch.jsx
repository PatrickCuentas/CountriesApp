import { useState, useEffect } from "react";

export const useFetch = (
  endpoint = "",
  dependencies = [],
  initialState = {
    data: [],
    loading: true,
    error: null,
  }
) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    loadData();
  }, dependencies);

  const loadData = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    setState((prev) => ({
      ...prev,
      loading: true,
      error: null,
    }));
    setState({
      data,
      loading: false,
      error: null,
    });
  };

  return [state, setState];
};
