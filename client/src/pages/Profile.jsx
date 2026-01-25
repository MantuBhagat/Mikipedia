import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import MikifyLoader from "../components/MikifyLoader";
import { IoSettingsOutline } from "react-icons/io5";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, profile, loading } = useContext(AuthContext);

  if (loading) {
    return Navigate("/MikifyLoader");
  }
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="bg-white border rounded-2xl p-8 flex gap-6 items-center">
        <img
          src={profile?.avatar || "https://i.pravatar.cc/120"}
          className="w-24 h-24 rounded-full border"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{profile?.bio || "No bio yet"}</p>

          <div className="mt-3 flex gap-4 text-sm">
            <a
              href={`/${profile?.username}`}
              className="text-blue-600"
              target="_blank"
            >
              View Public Profile
            </a>
            <span className="text-gray-400">@{profile?.username}</span>
          </div>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-xl">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
