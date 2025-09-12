import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../services/api-client";
import { FiMail } from "react-icons/fi";

export default function ResetPasswordRequest() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await apiClient.post("/auth/users/reset_password/", data);
      setMessage("✅ Check your email for reset instructions.");
    } catch (err) {
      setMessage("❌ Request failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-6 border border-red-600">
        <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
          <FiMail /> Reset Password
        </h2>
        {message && <p className="text-sm mb-2">{message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <button className="btn btn-primary w-full">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}
