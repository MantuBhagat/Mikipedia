import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg mb-6">
        This is the main landing page of the application.
      </p>

      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        <Link to="/login">Get started</Link>
      </button>
    </div>
  );
};

export default Home;
