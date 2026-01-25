import { NavLink } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../config/SidebarConfig";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react"; // Import useContext

export default function Sidebar() {
  // Use the useContext hook to access the value from AuthContext
  const { user } = useContext(AuthContext);

  if (!user) return null;

  const items = SIDEBAR_ITEMS[user.role] || [];

  return (
    <aside
      className="bg-white text-blue-600 p-4"
      style={{ width: 220, borderRight: "1px solid #ddd" }}
    >
      <h3>Dashboard</h3>

      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={{ display: "block", margin: "8px 0" }}
        >
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
}
