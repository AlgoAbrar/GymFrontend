import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import apiClient from "../services/api-client";

export default function Reports() {
  const [membership, setMembership] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [revenue, setRevenue] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const mem = await apiClient.get("/reports/membership/");
        setMembership(mem.data);
      } catch (err) {
        setMembership({ error: "Failed to load membership report" });
      }
      try {
        const att = await apiClient.get("/reports/attendance/");
        setAttendance(att.data);
      } catch (err) {
        setAttendance({ error: "Failed to load attendance report" });
      }
      try {
        const feed = await apiClient.get("/reports/feedback/");
        setFeedback(feed.data);
      } catch (err) {
        setFeedback({ error: "Failed to load feedback report" });
      }
      try {
        const rev = await apiClient.get("/reports/revenue/");
        setRevenue(rev.data);
      } catch (err) {
        setRevenue({ error: "Failed to load revenue report" });
      }
    };
    load();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Reports</h2>

          <section className="mb-6">
            <h3 className="text-lg text-red-400 mb-2">Membership Report</h3>
            <pre className="bg-neutral-800 p-4 rounded border border-red-600 text-gray-300">
              {JSON.stringify(membership, null, 2)}
            </pre>
          </section>

          <section className="mb-6">
            <h3 className="text-lg text-red-400 mb-2">Attendance Report</h3>
            <pre className="bg-neutral-800 p-4 rounded border border-red-600 text-gray-300">
              {JSON.stringify(attendance, null, 2)}
            </pre>
          </section>

          <section className="mb-6">
            <h3 className="text-lg text-red-400 mb-2">Feedback Report</h3>
            <pre className="bg-neutral-800 p-4 rounded border border-red-600 text-gray-300">
              {JSON.stringify(feedback, null, 2)}
            </pre>
          </section>

          <section>
            <h3 className="text-lg text-red-400 mb-2">Revenue Report</h3>
            <pre className="bg-neutral-800 p-4 rounded border border-red-600 text-gray-300">
              {JSON.stringify(revenue, null, 2)}
            </pre>
          </section>
        </div>
      </div>
    </div>
  );
}
