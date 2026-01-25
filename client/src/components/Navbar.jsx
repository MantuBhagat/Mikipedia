import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [copied, setCopied] = useState(false);

  const copyProfileLink = () => {
    const link = `${window.location.origin}/${user.username}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b px-8 py-4 flex justify-between z-50">
      <Link to="/" className="text-xl font-bold">
        Mikify
      </Link>

      {user && (
        <div className="relative group">
          <button className="flex items-center gap-2">
            <img
              src={user.avatar || "https://i.pravatar.cc/100"}
              className="w-8 h-8 rounded-full"
            />
            <span>{user.name}</span>
          </button>

          <div className="absolute right-0 hidden group-hover:block bg-white shadow-lg rounded w-52">
            {user.isProfileCompleted && (
              <>
                {/* Open in new tab */}
                <a
                  href={`/${user.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Open Public Profile
                </a>

                {/* Copy link */}
                <button
                  onClick={copyProfileLink}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  {copied ? "Link Copied ✅" : "Copy Profile Link"}
                </button>
              </>
            )}

            <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </Link>

            <button
              onClick={logout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
