import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-700 transition";

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded md:hidden"
      >
        <FiMenu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 min-h-screen bg-gray-900 text-gray-300 
        transition-all duration-300 z-40
        ${open ? "w-64" : "w-0 md:w-16"} overflow-hidden`}
      >
        {/* Logo */}
        <div className="p-4 text-xl font-bold text-white">
          {open ? "Mikipedia" : "M"}
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-1">
          <NavLink to="/admin" className={linkClass}>
            📊 {open && "Dashboard"}
          </NavLink>
          <NavLink to="/admin/users" className={linkClass}>
            👥 {open && "Users"}
          </NavLink>
          <NavLink to="/admin/content" className={linkClass}>
            📝 {open && "Content"}
          </NavLink>
          <NavLink to="/admin/reports" className={linkClass}>
            🚨 {open && "Reports"}
          </NavLink>
          <NavLink to="/admin/analytics" className={linkClass}>
            📈 {open && "Analytics"}
          </NavLink>

          <NavLink to="/profile" className={linkClass}>
            🙍 {open && "Profile"}
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
