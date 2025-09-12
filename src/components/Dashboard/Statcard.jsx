import React from "react";

export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-neutral-800 border border-red-600 rounded-lg p-6 flex items-center gap-4">
      <div className="text-red-500 text-3xl">{icon}</div>
      <div>
        <h4 className="text-gray-400 text-sm">{title}</h4>
        <p className="text-xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
