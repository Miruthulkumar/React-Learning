import React, { useState } from "react";
import "../App.css";

const Courses = (props) => {
  const [purchased, setPurchased] = useState(false);

  function buyNow(discount) {
    console.log(props.name + ` Course Bought! with ${discount}% Discount! `);
  }

  return (
    props.name && (
      <div className="flex overflow-hidden rounded-lg bg-gray-100 shadow-lg transition-transform hover:scale-105">
        <div className="flex w-1/3 items-center justify-center bg-orange-100">
          <span className="text-gray-600">Image</span>
        </div>
        <div className="flex w-2/3 flex-col justify-center p-5">
          <h2 className="mb-2 text-xl font-semibold">{props.name}</h2>
          <p className="mb-2 text-gray-600">Duration: {props.duration}</p>
          <p className="mb-2">{props.rating}</p>
          <p className="font-bold text-green-600">{props.price}</p>
          <button
            onClick={() => {
              buyNow(10);
              setPurchased(true);
            }}
            className="mt-2.5 mr-40 rounded-2xl bg-gray-500 transition-colors duration-100 hover:bg-gray-600"
          >
            Buy Now
          </button>
          <p className="ml-2 p-1.5 text-gray-400">
            {purchased ? "Thanks For Buying!" : "Few Seats left!!!"}
          </p>
          <button
            onClick={() => props.delete(props.id)}
            className="mt-2.5 mr-35 rounded-xl bg-gray-500 transition-colors duration-100 hover:bg-gray-600"
          >
            Delete Course
          </button>
        </div>
      </div>
    )
  );
};

export default Courses;
