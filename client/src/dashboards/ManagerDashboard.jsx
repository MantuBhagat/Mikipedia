import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const ManagerDashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <MikifyLoader />;
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <p>Role: {user.role}</p>
      <p>Manager reports here</p>
    </div>
  );
};

export default ManagerDashboard;
