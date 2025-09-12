import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../services/api-client";
import { FiLock } from "react-icons/fi";

export default function ResetPasswordConfirm() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await apiClient.post("/auth/users/reset_password_confirm/", data);
      setMessage("✅ Password reset successful!");
    } catch (err) {
      setMessage("❌ Reset failed.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-6 border border-red-600">
        <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
          <FiLock /> Confirm Reset
        </h2>
        {message && <p className="text-sm mb-2">{message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("uid")}
            type="text"
            placeholder="UID"
            className="input input-bordered w-full"
            required
          />
          <input
            {...register("token")}
            type="text"
            placeholder="Token"
            className="input input-bordered w-full"
            required
          />
          <input
            {...register("new_password")}
            type="password"
            placeholder="New Password"
            className="input input-bordered w-full"
            required
          />
          <button className="btn btn-primary w-full">Reset Password</button>
        </form>
      </div>
    </div>
  );
}
