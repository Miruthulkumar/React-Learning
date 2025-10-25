import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [listOfCourses, setListOfCourses] = useState(null);

  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:5175/courses")
        .then((response) => {
          setListOfCourses(response.data);
        })
        .catch((error) => {
          console.log(error.message);
          setError(error.message);
        });
    }, 1000);
  }, []);

  return [listOfCourses, error];
};

export default useFetch;
