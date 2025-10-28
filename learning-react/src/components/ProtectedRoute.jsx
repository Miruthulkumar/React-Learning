import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // check if user is stored in localStorage
  const user = localStorage.getItem("user");

  if (!user) {
    // if not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  // if logged in, render the protected content
  return children;
}

export default ProtectedRoute;