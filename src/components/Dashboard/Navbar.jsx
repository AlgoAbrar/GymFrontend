import React from "react";
import { FiBell, FiUser } from "react-icons/fi";
import useAuthContext from "../../hooks/useAuthContext";

export default function DashboardNavbar() {
  const { user } = useAuthContext();

  return (
    <header className="flex justify-between items-center px-6 py-3 border-b border-red-600 bg-neutral">
      <h1 className="text-xl font-semibold text-red-500">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="btn btn-ghost text-gray-300">
          <FiBell className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <FiUser className="w-5 h-5 text-gray-400" />
          <span className="text-gray-200">{user?.first_name || "User"}</span>
        </div>
      </div>
    </header>
  );
}
