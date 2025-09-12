import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

export default function MainLayout() {
  return (
    <div className="bg-neutral min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
