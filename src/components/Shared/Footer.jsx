import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-600 py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-gray-400">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/images/logo.png"
            alt="AlgoFit"
            className="h-8"
          />
          <span className="text-red-500 font-bold">AlgoFit</span>
        </div>

        {/* Socials */}
        <div className="flex gap-4 text-xl mt-4 sm:mt-0">
          <a href="#" className="hover:text-red-500">
            <FiFacebook />
          </a>
          <a href="#" className="hover:text-red-500">
            <FiInstagram />
          </a>
          <a href="#" className="hover:text-red-500">
            <FiTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm mt-4 sm:mt-0">
          © {new Date().getFullYear()} AlgoFit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
