import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Courses from "./Courses";

const CourseList = () => {
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

  function handleDelete(id) {
    const newCourses = listOfCourses.filter((c) => c.id != id);
    setListOfCourses(newCourses);
  }

  if (!listOfCourses) {
    return (
      <>
        <div className="text-center mt-15">{error}</div>
      </>
    );
  }

  const ascendingOrder = [...listOfCourses]
    .filter((course) => course.price) // ignore empty objects
    .sort((a, b) => {
      const priceA = parseFloat(a.price.slice(1));
      const priceB = parseFloat(b.price.slice(1));
      return priceA - priceB;
    });

  // const descendingOrder = [...listOfCourses]
  //   .filter((course) => course.price) // ignore empty objects
  //   .sort((a, b) => {
  //     const priceA = parseFloat(a.price.slice(1));
  //     const priceB = parseFloat(b.price.slice(1));
  //     return priceB - priceA;
  //   });

  //dummy data is converted into props for courses components (using map)
  const mappedCourses = ascendingOrder.map((course) => {
    return (
      <Courses
        key={course.id}
        name={course.name}
        price={course.price}
        rating={course.rating}
        duration={course.duration}
        id={course.id}
        delete={handleDelete}
      />
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-15">
      {mappedCourses}
    </div>
  );
};

export default CourseList;
