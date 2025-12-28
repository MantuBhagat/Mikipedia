import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaBars,
  FaHome,
  FaPen,
  FaCheck,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const menuConfig = {
  contributor: [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard/contributor" },
    { name: "My Content", icon: <FaPen />, path: "/content/mine" },
  ],
  editor: [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard/editor" },
    { name: "Review Queue", icon: <FaCheck />, path: "/editor/review" },
  ],
  moderator: [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard/moderator" },
    { name: "Reports", icon: <FaShieldAlt />, path: "/moderator/reports" },
  ],
  admin: [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard/admin" },
    { name: "Users", icon: <FaUsers />, path: "/admin/users" },
  ],
};

const Sidebar = ({ role }) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.aside
      animate={{ width: open ? 260 : 80 }}
      className="h-screen bg-gray-900 text-white p-4 flex flex-col"
    >
      {/* Top */}
      <div className="flex items-center justify-between mb-6">
        {open && <h1 className="text-xl font-bold">Mikify</h1>}
        <FaBars className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuConfig[role]?.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-lg transition ${
                isActive ? "bg-indigo-600" : "hover:bg-gray-800"
              }`
            }
          >
            {item.icon}
            {open && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-700 pt-4 text-sm text-center">
        {open ? "© Mikify" : "©"}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
