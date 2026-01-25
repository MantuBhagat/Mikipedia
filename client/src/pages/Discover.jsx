import { motion } from "framer-motion";
import { FiSearch, FiMapPin, FiBriefcase } from "react-icons/fi";
import ProfileCard from "../components/ProfileCard";

const Discover = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Discover People & Businesses
          </h1>
          <p className="text-gray-500 mt-2">
            Find creators, professionals & services — without websites.
          </p>

          {/* Search */}
          <div className="w-full max-w-xl flex justify-center items-center">
            <FiSearch className="left-4 top-4 text-gray-800" />
            <input
              type="search"
              className="py-4 focus:border-b-4 border-r-gray-800 outline-none px-4 object-cover w-full"
            />
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <ProfileCard />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
