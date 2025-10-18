import React from "react";
import "../App.css";
import Courses from "./Courses";

const CourseList = () => {
  //dummy data
  const listOfCourses = [
    {

    },
    {
      name: "CSS MASTERCLASS",
      price: "$15",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "12 Hours",
    },
    {
      name: "JAVASCRIPT FUNDAMENTALS",
      price: "$20",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "18 Hours",
    },
    {
      name: "REACT FOR BEGINNERS",
      price: "$25",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "22 Hours",
    },
    {
      name: "NODE.JS BASICS",
      price: "$18",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "15 Hours",
    },
    {
      name: "PYTHON FOR EVERYONE",
      price: "$12",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "16 Hours",
    },
    {
      name: "C PROGRAMMING ESSENTIALS",
      price: "$8",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "9 Hours",
    },
    {
      name: "FULL STACK WEB DEVELOPMENT",
      price: "$40",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "40 Hours",
    },
    {
      name: "DATABASE MANAGEMENT (SQL)",
      price: "$14",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "13 Hours",
    },
    {
      name: "DATA STRUCTURES & ALGORITHMS",
      price: "$22",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "20 Hours",
    },
    {
      name: "GIT & GITHUB CRASH COURSE",
      price: "$6",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "6 Hours",
    },
    {
      name: "RESPONSIVE WEB DESIGN",
      price: "$11",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "10 Hours",
    },
  ];

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
        key={course.name}
        name={course.name}
        price={course.price}
        rating={course.rating}
        duration={course.duration}
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
