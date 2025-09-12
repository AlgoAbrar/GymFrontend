import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex bg-neutral text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
