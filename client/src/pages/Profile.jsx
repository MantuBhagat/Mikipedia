import { useEffect, useState } from "react";
import api from "../api/api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .get("/users/profile")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[350px]">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Role:</b> {user.role}
        </p>
      </div>
    </div>
  );
}
