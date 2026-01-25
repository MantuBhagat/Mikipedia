import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { FaUsers } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" />

      <main className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

        <div className="grid grid-cols-3 gap-6">
          <StatCard title="Total Users" value="150" icon={<FaUsers />} />
          <StatCard title="Total Reports" value="45" icon={<FaUsers />} />
          <StatCard title="Total Feedbacks" value="5" icon={<FaUsers />} />

          <StatCard title="Roles" icon={<FaUsers />} />
        </div>

        <div className="grid grid-cols-3 gap-6"></div>

        <div className="grid grid-cols-3 gap-6"></div>
      </main>
    </div>
  );
};

export default AdminDashboard;
