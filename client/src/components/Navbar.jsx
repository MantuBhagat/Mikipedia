import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdTravelExplore } from "react-icons/md";
const links = [
  { name: "Explore", path: "/explore", icon: "<MdTravelExplore />" },
];

const Navbar = () => {
  return (
    <motion.nav
      className="bg-slate-50 sticky top-0 left-0 w-full z-10"
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
        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
