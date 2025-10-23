import React, { useEffect, useState } from "react";
import "../App.css";
import Courses from "./Courses";

const CourseList = () => {
  //dummy data
  const [listOfCourses, setListOfCourses] = useState([
    {
      id: 1,
      name: "CSS MASTERCLASS",
      price: "$15",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "12 Hours",
    },
    {
      id: 2,
      name: "JAVASCRIPT FUNDAMENTALS",
      price: "$20",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "18 Hours",
    },
    {
      id: 3,
      name: "REACT FOR BEGINNERS",
      price: "$25",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "22 Hours",
    },
    {
      id: 4,
      name: "NODE.JS BASICS",
      price: "$18",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "15 Hours",
    },
    {
      id: 5,
      name: "PYTHON FOR EVERYONE",
      price: "$12",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "16 Hours",
    },
    {
      id: 6,
      name: "C PROGRAMMING ESSENTIALS",
      price: "$8",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "9 Hours",
    },
    {
      id: 7,
      name: "FULL STACK WEB DEVELOPMENT",
      price: "$40",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "40 Hours",
    },
    {
      id: 8,
      name: "DATABASE MANAGEMENT (SQL)",
      price: "$14",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "13 Hours",
    },
    {
      id: 9,
      name: "DATA STRUCTURES & ALGORITHMS",
      price: "$22",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "20 Hours",
    },
    {
      id: 10,
      name: "GIT & GITHUB CRASH COURSE",
      price: "$6",
      rating: "⭐️⭐️⭐️⭐️",
      duration: "6 Hours",
    },
    {
      id: 11,
      name: "RESPONSIVE WEB DESIGN",
      price: "$11",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      duration: "10 Hours",
    },
  ]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((Response) => {
        // console.log(Response);
        return Response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  function handleDetele(id) {
    const newCourses = listOfCourses.filter((c) => c.id != id);
    setListOfCourses(newCourses);
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
        delete={handleDetele}
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
