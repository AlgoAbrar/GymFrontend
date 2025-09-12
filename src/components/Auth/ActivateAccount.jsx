import React, { useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../../services/api-client";
import { FiCheckCircle } from "react-icons/fi";

export default function ActivateAccount() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      await apiClient.post("/auth/users/activation/", data);
      setMessage("✅ Account activated successfully!");
    } catch (err) {
      setMessage("❌ Activation failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-6 border border-red-600">
        <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2">
          <FiCheckCircle /> Activate Account
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
          <button className="btn btn-primary w-full">Activate</button>
        </form>
      </div>
    </div>
  );
}
