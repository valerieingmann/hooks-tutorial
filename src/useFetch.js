import { useState, useEffect } from "react";

const useFetch = uri => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;

    const fetchData = async () => {
      try {
        const res = await fetch(uri);
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [uri]);
  return { loading, data, error };
};

export default useFetch;
