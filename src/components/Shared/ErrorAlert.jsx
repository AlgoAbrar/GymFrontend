import React from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function ErrorAlert({ message }) {
  if (!message) return null;
  return (
    <div className="flex items-center gap-2 p-3 bg-red-900 text-red-200 rounded-lg border border-red-600 my-2">
      <FiAlertCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}
