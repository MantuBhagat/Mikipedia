import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import { FaCheckDouble } from "react-icons/fa";

const EditorDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="editor" />

      <main className="p-6 w-full">
        <h2 className="text-2xl font-bold mb-6">Editor Dashboard</h2>

        <div className="grid grid-cols-3 gap-6">
          <StatCard
            title="Pending Reviews"
            value="7"
            icon={<FaCheckDouble />}
          />
        </div>
      </main>
    </div>
  );
};

export default EditorDashboard;
