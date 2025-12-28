import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="relative">
      <FaUserCircle
        size={28}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg text-gray-800">
          <button
            onClick={() => navigate("/profile")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Profile
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Dashboard
          </button>

          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
