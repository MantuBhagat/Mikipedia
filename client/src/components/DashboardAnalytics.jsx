import { useEffect, useState } from "react";
import api from "../api/axios";

const DashboardAnalytics = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    api.get("/profiles/me/analytics").then((res) => {
      setViews(res.data.views);
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold">Profile Analytics</h3>
      <p className="text-3xl font-bold mt-2">{views}</p>
      <p className="text-gray-500 text-sm">Profile views</p>
    </div>
  );
};

export default DashboardAnalytics;
