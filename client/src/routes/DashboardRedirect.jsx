import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const DashboardRedirect = () => {
  const { user, loading } = useContext(AuthContext);

  // Optional: agar auth state abhi load ho rha ho
  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // role ke base pe dashboard
  return <Navigate to={`/profile`} replace />;
};

export default DashboardRedirect;
