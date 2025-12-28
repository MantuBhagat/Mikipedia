import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { FaExclamationTriangle } from "react-icons/fa";

const ModeratorDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="moderator" />

      <main className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">Moderator Dashboard</h2>

        <div className="grid grid-cols-3 gap-6">
          <StatCard
            title="Active Reports"
            value="4"
            icon={<FaExclamationTriangle />}
          />
        </div>
      </main>
    </div>
  );
};

export default ModeratorDashboard;
