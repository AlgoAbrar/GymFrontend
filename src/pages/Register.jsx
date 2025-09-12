import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUserPlus } from "react-icons/fi";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/Shared/ErrorAlert";

export default function Register() {
  const { registerUser } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data) => {
    const res = await registerUser(data);
    if (res?.success) {
      setSuccessMsg(res.message);
      setErrorMsg("");
    } else {
      setErrorMsg(res.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-6 border border-red-600">
        <h2 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
          <FiUserPlus /> Register
        </h2>

        {errorMsg && <ErrorAlert message={errorMsg} />}
        {successMsg && (
          <div className="p-3 bg-green-900 text-green-200 rounded-lg border border-green-600 my-2">
            {successMsg}
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 text-black"
        >
          {/* Email */}
          <div>
            <label className="text-sm text-black">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* First Name */}
          <div>
            <label className="text-sm text-black">First Name</label>
            <input
              {...register("first_name", {
                required: "First name is required",
              })}
              type="text"
              placeholder="Enter your first name"
              className="input input-bordered w-full"
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm">
                {errors.first_name.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm text-black">Last Name</label>
            <input
              {...register("last_name", { required: "Last name is required" })}
              type="text"
              placeholder="Enter your last name"
              className="input input-bordered w-full"
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm">{errors.last_name.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-black">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type="password"
              placeholder="Enter a strong password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-black">Confirm Password</label>
            <input
              {...register("re_password", {
                required: "Please confirm your password",
              })}
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
            />
            {errors.re_password && (
              <p className="text-red-500 text-sm">
                {errors.re_password.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>

        <p className="mt-4 text-black text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-red-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
