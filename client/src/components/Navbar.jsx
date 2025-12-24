import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const links = [
  { name: "Upload", path: "/upload", icon: <RxUpload /> },
  { name: "Explore", path: "/", icon: <LiaHomeSolid /> },
  { name: "About", path: "/about", icon: <FaInfo /> },
  { name: "Contact", path: "/contact", icon: <FaPhone /> },
  { name: "Account", path: "/account", icon: <FaUserCircle /> },
];
import { LiaHomeSolid } from "react-icons/lia";
import { FaUserCircle, FaPhone, FaHome, FaInfo } from "react-icons/fa";
import { RxUpload } from "react-icons/rx";
const Navbar = () => {
  return (
    <motion.nav
      className="backdrop-blur-2xl sticky top-0 left-0 w-full z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="w-full py-2 flex items-center justify-around">
        <div>
          <Link to="/" className="text-2xl font-bold">
            Mikify
          </Link>
        </div>
        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
            >
              <span className="text-xl">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
