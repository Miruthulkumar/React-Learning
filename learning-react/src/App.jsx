import { Routes, Route } from "react-router-dom";
import "./App.css";
import CourseList from "./components/CourseList";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/CourseList"
          element={
            <ProtectedRoute>
              <CourseList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
