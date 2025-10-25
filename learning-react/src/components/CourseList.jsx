// import React, { useEffect useState } from "react";
// import axios from "axios";
import "../App.css";
import Courses from "./Courses";
import useFetch from "../hooks/useFetch";

const CourseList = () => {

  //custom hook
  const [data, setData, error] = useFetch(
    "http://localhost:5175/courses"
  );

  function handleDelete(id) {
    const newCourses = data.filter((c) => c.id != id);
    setData(newCourses);
  }

  if (!data) {
    return (
      <>
        <div className="text-center mt-15">
          {!error && (
            <img
              className="mx-auto mt-100 w-20 h-20"
              src="src/assets/Loading.gif"
            ></img>
          )}
          {error && <p>{error}</p>}
        </div>
      </>
    );
  }

  const ascendingOrder = [...data]
    .filter((course) => course.price) // ignore empty objects
    .sort((a, b) => {
      const priceA = parseFloat(a.price.slice(1));
      const priceB = parseFloat(b.price.slice(1));
      return priceA - priceB;
    });

  // const descendingOrder = [...data]
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
