import { Routes, Route } from "react-router-dom";
import "./App.css";
import CourseList from "./components/CourseList";
import Login from "./components/Login";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CourseList/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/CourseList" element={<CourseList/>}/>
      </Routes>
    </>
  );
}

export default App;
