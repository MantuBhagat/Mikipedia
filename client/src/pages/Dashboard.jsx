import DashboardLayout from "../components/DashboardLayout";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <DashboardLayout>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>

      {user.role === "admin" && <p>Admin analytics here</p>}
      {user.role === "manager" && <p>Manager reports here</p>}
      {user.role === "user" && <p>User activity here</p>}
    </DashboardLayout>
  );
}
