import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import apiClient from "../services/api-client";
import useAuthContext from "../hooks/useAuthContext";

export default function Attendance() {
  const { authTokens } = useAuthContext();
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await apiClient.get("/reports/attendance/", {
          headers: { Authorization: `JWT ${authTokens?.access}` },
        });
        setAttendance(res.data);
      } catch (err) {
        console.error("Error fetching attendance", err);
      }
    };
    if (authTokens) fetchAttendance();
  }, [authTokens]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Attendance</h2>
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Class</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((a) => (
                <tr key={a.id}>
                  <td>{a.booking?.fitness_class?.title}</td>
                  <td>{new Date(a.created_at).toLocaleDateString()}</td>
                  <td>{a.present ? "Present" : "Absent"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
