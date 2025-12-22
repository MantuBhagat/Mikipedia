import React from "react";
import FloatingInput from "./FloatingInput";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const Search = () => {
  return (
    <motion.div
      className="w-full max-w-md mx-auto mt-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FloatingInput
        className="w-full h-14 flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus-within:border-orange-500"
        label="Search"
        name="search"
        icon={<FaSearch />}
      />
    </motion.div>
  );
};

export default Search;
