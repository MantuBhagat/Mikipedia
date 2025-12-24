import React from "react";
import { motion } from "framer-motion";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Admin/Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  // Logout function to clear token and redirect to login

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to the Dashboard
          </h2>
          <p className="text-gray-700">
            Here you can manage users, content, and view analytics.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
};

export default Dashboard;
