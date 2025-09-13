import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiLogIn, FiLogOut } from "react-icons/fi";
import useAuthContext from "../../hooks/useAuthContext";

export default function Navbar() {
  const { user, logoutUser } = useAuthContext();
  const navigate = useNavigate();

  return (
    <nav className="bg-black border-b border-red-600 px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="../../assets/images/logo.png"
          alt="AlgoFit"
          className="h-10"
        />
        <span className="text-red-500 font-bold text-xl">AlgoFit</span>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6 text-gray-300">
        <Link to="/" className="flex items-center gap-2 hover:text-red-500">
          <FiHome className="w-5 h-5" /> Home
        </Link>
        <Link to="/about" className="hover:text-red-500">
          About
        </Link>
        {user ? (
          <>
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-2 hover:text-red-500"
            >
              <FiUser className="w-5 h-5" /> Profile
            </Link>
            <button
              onClick={() => {
                logoutUser();
                navigate("/");
              }}
              className="flex items-center gap-2 hover:text-red-500"
            >
              <FiLogOut className="w-5 h-5" /> Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="flex items-center gap-2 hover:text-red-500"
          >
            <FiLogIn className="w-5 h-5" /> Login
          </Link>
        )}
      </div>
    </nav>
  );
}
