import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

export default function DashboardNavbar() {
  const { user, logoutUser } = useAuthContext();

  return (
    <div className="navbar bg-gradient-to-r from-black via-red-900 to-black text-white shadow-md px-4">
      <div className="flex-1">
        <Link to="/dashboard/profile" className="font-bold text-lg">
          AlgoFit Dashboard
        </Link>
      </div>
      <div className="flex-none">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="hidden md:block">Welcome, {user.email}</span>
            <button
              onClick={logoutUser}
              className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
