import React, { useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = React.useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md"
      >
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        {userData ? (
          <div>
            <p className="text-gray-700 mb-2">
              <strong>Name:</strong> {userData.name}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> {userData.email}
            </p>
            {/* Add more user details as needed */}
          </div>
        ) : (
          <p className="text-gray-700">Loading...</p>
        )}
      </motion.div>
    </div>
  );
};

export default Profile;
