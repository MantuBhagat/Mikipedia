import { motion } from "framer-motion";
import { FiUser, FiEdit, FiPlusSquare, FiUsers, FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h2 className="text-xl font-semibold mb-10">Mikify</h2>

        <nav className="space-y-4 text-sm text-gray-600">
          <Link
            to="/dashboard/profile"
            className="flex justify-center items-center gap-2"
          >
            <FiUser />
            My Profile
          </Link>
          <Link to="/create" className="flex justify-center items-center gap-2">
            <FiPlusSquare /> Create Post
          </Link>
          <SidebarItem icon={<FiUsers />} label="Communities" />
          <SidebarItem icon={<FiEdit />} label="Edit Profile" />
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-semibold">Welcome back 👋</h1>
          <p className="text-gray-600 mt-1">Manage your presence on Mikify</p>
        </motion.div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <StatCard icon={<FiEye />} title="Profile Views" value="124" />
          <StatCard icon={<FiPlusSquare />} title="Posts" value="6" />
          <StatCard icon={<FiUsers />} title="Communities" value="3" />
        </div>

        {/* QUICK ACTIONS */}
        <section className="mt-12">
          <h2 className="text-lg font-medium mb-4">Quick actions</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link to="Create a post" />
            <Link to="Update profile" />
            <Link to="Explore communities" />
          </div>
        </section>

        {/* ACTIVITY */}
        <section className="mt-12">
          <h2 className="text-lg font-medium mb-4">Recent activity</h2>

          <div className="bg-white border rounded-xl p-6 text-sm text-gray-600">
            No activity yet. Start by creating a post or joining a community.
          </div>
        </section>
      </main>
    </div>
  );
};

/* ---------- Components ---------- */

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:text-black">
    {icon}
    <span>{label}</span>
  </div>
);

const StatCard = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-white border rounded-2xl p-6"
  >
    <div className="text-xl mb-3">{icon}</div>
    <p className="text-sm text-gray-600">{title}</p>
    <h3 className="text-2xl font-semibold mt-1">{value}</h3>
  </motion.div>
);

const ActionCard = ({ title }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="border rounded-xl p-5 bg-white cursor-pointer"
  >
    <h3 className="font-medium">{title}</h3>
  </motion.div>
);

export default UserDashboard;
