import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Public Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

// Private Dashboard Pages
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import Memberships from "../pages/Memberships";
import Classes from "../pages/Classes";
import Attendance from "../pages/Attendance";
import Payments from "../pages/Payments";
import Feedback from "../pages/Feedback";
import Reports from "../pages/Reports";

// Auth
import PrivateRoute from "../components/Shared/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* --PUBLIC ROUTES -*/}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* - PRIVATE DASHBOARD ROUTES --*/}
      <Route
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/memberships" element={<Memberships />} />
        <Route path="/dashboard/classes" element={<Classes />} />
        <Route path="/dashboard/attendance" element={<Attendance />} />
        <Route path="/dashboard/payments" element={<Payments />} />
        <Route path="/dashboard/feedback" element={<Feedback />} />
        <Route path="/dashboard/reports" element={<Reports />} />
      </Route>

      
      <Route
        path="*"
        element={
          <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="text-lg">Page Not Found</p>
          </div>
        }
      />
    </Routes>
  );
}
