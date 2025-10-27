import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => {
      axios
        .get(url, { signal })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }, 1000);

    return () => {
      controller.abort();
    };
  }, [url]);

  return [data, setData, error];
};

export default useFetch;
