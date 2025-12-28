import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-4 mt-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Mikipedia. All rights reserved.
      </div>
    </motion.footer>
  );
};
export default Footer;
