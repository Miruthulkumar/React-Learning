import React from "react";
import "../App.css";

const Courses = (props) => {
  return (
    <div className="flex bg-gray-100 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <div className="w-1/3 bg-orange-100 flex items-center justify-center">
        <span className="text-gray-600">Image</span>
      </div>
      <div className="w-2/3 p-5 flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-2">{props.name}</h2>
        <p className="text-gray-600 mb-2">Duration: {props.duration}</p>
        <p className="mb-2">{props.rating}</p>
        <p className="text-green-600 font-bold">{props.price}</p>
      </div>
    </div>
  );
};

export default Courses;
