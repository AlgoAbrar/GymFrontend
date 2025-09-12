import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-black via-red-900 to-black text-white shadow-md">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AlgoFit Logo" className="w-10 h-10" />
          <span className="font-bold text-xl">AlgoFit</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className="hover:text-red-400">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="hover:text-red-400">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile" className="hover:text-red-400">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="hover:text-red-400">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" className="hover:text-red-400">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
