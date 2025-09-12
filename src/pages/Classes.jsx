import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import apiClient from "../services/api-client";
import useAuthContext from "../hooks/useAuthContext";

export default function Classes() {
  const { authTokens } = useAuthContext();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await apiClient.get("/classes/", {
          headers: { Authorization: `JWT ${authTokens?.access}` },
        });
        setClasses(res.data);
      } catch (err) {
        console.error("Error fetching classes", err);
      }
    };
    if (authTokens) fetchClasses();
  }, [authTokens]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Fitness Classes
          </h2>
          <ul className="space-y-4">
            {classes.map((cls) => (
              <li
                key={cls.id}
                className="bg-neutral-800 border border-red-600 p-4 rounded-lg"
              >
                <h3 className="text-xl font-bold">{cls.title}</h3>
                <p className="text-gray-400">{cls.description}</p>
                <p className="text-gray-300">
                  Instructor: {cls.instructor_name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
