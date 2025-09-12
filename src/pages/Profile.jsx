import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import useAuthContext from "../hooks/useAuthContext";
import apiClient from "../services/api-client";

export default function Profile() {
  const { user, updateUserProfile } = useAuthContext();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(form);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Failed to update profile:", err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-6 max-w-xl">
          <h2 className="text-2xl font-bold text-red-500 mb-4">My Profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">First Name</label>
              <input
                type="text"
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                className="input input-bordered w-full bg-neutral-900 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Last Name</label>
              <input
                type="text"
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                className="input input-bordered w-full bg-neutral-900 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                readOnly
                className="input input-bordered w-full bg-neutral-900 text-gray-400"
              />
            </div>
            <button type="submit" className="btn bg-red-600 border-none">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
