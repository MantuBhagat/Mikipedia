import { useEffect, useState } from "react";
import { getAllUsers, updateUserRole } from "../../api/adminApi.js";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  const handleRoleChange = async (id, role) => {
    await updateUserRole(id, role);
    setUsers((prev) => prev.map((u) => (u._id === id ? { ...u, role } : u)));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">All Users</h1>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Verified</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t">
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <select
                  value={u.role}
                  onChange={(e) => handleRoleChange(u._id, e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                </select>
              </td>
              <td>{u.isAccountVerified ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
