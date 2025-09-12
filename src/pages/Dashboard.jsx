import React, { useEffect, useState } from "react";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import Sidebar from "../components/Dashboard/Sidebar";
// import StatCard from "../components/Dashboard/StatCard";
import { FiUsers, FiBook, FiCheckSquare, FiCreditCard } from "react-icons/fi";
import apiClient from "../services/api-client";
import useAuthContext from "../hooks/useAuthContext";

export default function Dashboard() {
  const { authTokens } = useAuthContext();
  const [stats, setStats] = useState({
    members: 0,
    classes: 0,
    attendance: 0,
    payments: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await apiClient.get("/reports/membership/", {
          headers: { Authorization: `JWT ${authTokens?.access}` },
        });
        setStats((prev) => ({ ...prev, members: res.data.length }));
      } catch (err) {
        console.error("Error fetching membership report", err);
      }
    };
    if (authTokens) fetchStats();
  }, [authTokens]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Members" value={stats.members} icon={<FiUsers />} />
          <StatCard title="Classes" value={stats.classes} icon={<FiBook />} />
          <StatCard
            title="Attendance"
            value={stats.attendance}
            icon={<FiCheckSquare />}
          />
          <StatCard
            title="Payments"
            value={stats.payments}
            icon={<FiCreditCard />}
          />
        </div>
      </div>
    </div>
  );
}
