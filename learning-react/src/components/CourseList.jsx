import React, { useEffect, useState } from "react";
import "../App.css";
import Courses from "./Courses";

const CourseList = () => {
  //dummy data
  const [listOfCourses, setListOfCourses] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5175/courses")
      .then((Response) => {
        // console.log(Response);
        return Response.json();
      })
      .then((data) => {
        setListOfCourses(data);
      });
  }, []);

  function handleDelete(id) {
    const newCourses = listOfCourses.filter((c) => c.id != id);
    setListOfCourses(newCourses);
  }

  if (!listOfCourses) {
    return <></>;
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
