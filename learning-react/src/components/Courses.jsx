import React, { useState } from "react";
import "../App.css";

const Courses = (props) => {
  const [purchased, setPurchased] = useState(false);

  function buyNow(discount) {
    console.log(props.name + ` Course Bought! with ${discount}% Discount! `);
  }

  return (
    props.name && (
      <div className="flex bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
        <div className="w-1/3 bg-orange-100 flex items-center justify-center">
          <span className="text-gray-600">Image</span>
        </div>
        <div className="w-2/3 p-5 flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
          <p className="text-gray-600 mb-2">Duration: {props.duration}</p>
          <p className="mb-2">{props.rating}</p>
          <p className="text-green-600 font-bold">{props.price}</p>
          <button
            onClick={() => {
              buyNow(10);
              setPurchased(true);
            }}
            className="bg-gray-500 rounded-2xl hover:bg-gray-600 transition-colors duration-100 mt-2.5 mr-40"
          >
            Buy Now
          </button>
          <p className="text-gray-400 ml-2 p-1.5">
            {purchased ? "Thanks For Buying!" : "Few Seats left!!!"}
          </p>
        </div>
      </div>
    )
  );
};

export default Courses;
