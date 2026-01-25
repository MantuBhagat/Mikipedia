import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import MikifyLoader from "../components/MikifyLoader";
import AdminDashboard from "../dashboards/AdminDashboard";
import ManagerDashboard from "../dashboards/ManagerDashboard";
import UserDashboard from "../dashboards/UserDashboard";

const DashboardRouter = () => {
  const { user, loading } = useContext(AuthContext);

  // Optional: agar auth state abhi load ho rha ho
  if (loading) {
    return <MikifyLoader />;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  switch (user.role) {
    case "admin":
      return <AdminDashboard />;

    case "manager":
      return <ManagerDashboard />;
    default:
      return <UserDashboard />;
  }
};

export default DashboardRouter;
