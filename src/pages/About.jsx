import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold text-red-500 mb-4">About AlgoFit</h1>
      <p className="text-gray-300 mb-6">
        AlgoFit is a next-generation gym management system built to help
        members, trainers, and admins manage everything from one platform.
        Whether it’s memberships, classes, attendance, or payments — it’s all
        here in one place.
      </p>
      <p className="text-gray-400">
        This project is powered by <span className="text-red-400">React</span>{" "}
        on the frontend and{" "}
        <span className="text-red-400">Django REST Framework</span> on the
        backend. It integrates secure payments with
        <span className="text-red-400"> SSLCommerz</span> and supports
        role-based access control for Members, Staff, and Admins.
      </p>
    </div>
  );
}
