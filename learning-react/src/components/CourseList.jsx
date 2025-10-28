// import React, { useEffect, useState } from "react";
// import axios from "axios";
import "../App.css";
import Courses from "./Courses";
import useFetch from "../hooks/useFetch";

const CourseList = () => {
  //custom hook
  const [listOfCourses, setListOfCourses, error] = useFetch(
    "http://localhost:5175/courses",
  );

  function handleDelete(id) {
    const newCourses = listOfCourses.filter((c) => c.id != id);
    setListOfCourses(newCourses);
  }

  if (!listOfCourses) {
    return (
      <>
        <div className="mt-15 text-center">
          {!error && (
            <img
              className="mx-auto mt-100 h-20 w-20"
              src="src/assets/Loading.gif"
            ></img>
          )}
          {error && <p>{error}</p>}
        </div>
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
    <div className="mt-15 grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {mappedCourses}
    </div>
  );
};

export default CourseList;
