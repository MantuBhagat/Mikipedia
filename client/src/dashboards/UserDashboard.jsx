import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { FaFileAlt } from "react-icons/fa";

const ContributorDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <main className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">Contributor Dashboard</h2>

        <div className="grid grid-cols-3 gap-6">
          <StatCard title="My Posts" value="12" icon={<FaFileAlt />} />
        </div>
      </main>
    </div>
  );
};

export default ContributorDashboard;
