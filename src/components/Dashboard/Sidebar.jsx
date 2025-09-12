import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiUser,
  FiCreditCard,
  FiBarChart2,
  FiBook,
  FiCheckCircle,
  FiMessageSquare,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-b from-black via-red-900 to-black text-white min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
      <ul className="menu space-y-2">
        <li>
          <NavLink to="/dashboard/profile" className="flex items-center gap-2">
            <FiUser className="w-5 h-5" /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/memberships"
            className="flex items-center gap-2"
          >
            <FiCreditCard className="w-5 h-5" /> Memberships
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/classes" className="flex items-center gap-2">
            <FiBook className="w-5 h-5" /> Classes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/attendance"
            className="flex items-center gap-2"
          >
            <FiCheckCircle className="w-5 h-5" /> Attendance
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/payments" className="flex items-center gap-2">
            <FiCreditCard className="w-5 h-5" /> Payments
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/feedback" className="flex items-center gap-2">
            <FiMessageSquare className="w-5 h-5" /> Feedback
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reports" className="flex items-center gap-2">
            <FiBarChart2 className="w-5 h-5" /> Reports
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
