import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setData(data.user);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
          {data ? (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">ID:</h3>
                <p className="text-gray-700">{data._id}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Name:</h3>
                <p className="text-gray-700">{data.name}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Username:</h3>
                <p className="text-gray-700">{data.username}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email:</h3>
                <p className="text-gray-700">{data.email}</p>
              </div>
              {/* Add more profile fields as needed */}
            </div>
          ) : (
            <p className="text-gray-500 text-center">Loading profile...</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
