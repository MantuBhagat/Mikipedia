import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const links = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfo /> },
  { name: "Contact", path: "/contact", icon: <FaPhone /> },
  { name: "Account", path: "/account", icon: <FaUserCircle /> },
];
import { FaUserCircle, FaPhone, FaHome, FaInfo } from "react-icons/fa";
const Navbar = () => {
  return (
    <motion.nav
      className="w-full p-2 bg-green-500"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="w-full h-16 flex items-center justify-around pt-2">
        {links.map((link) => (
          <Link key={link.name} to={link.path} className="">
            {link.icon && <span className="ml-1 text-3xl">{link.icon}</span>}
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
