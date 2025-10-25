import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }, 1000);
  }, [url]);

  return [data, setData, error];
};

export default useFetch;
