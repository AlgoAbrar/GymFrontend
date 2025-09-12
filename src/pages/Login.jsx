import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { loginUser, errorMsg } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await loginUser(data); 
    navigate("/dashboard/profile");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black via-red-900 to-black">
      <div className="card w-full max-w-md shadow-xl bg-base-200 text-black">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          {errorMsg && (
            <p className="text-red-400 text-center mb-2">{errorMsg}</p>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
                className="input input-bordered w-full text-black"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
                className="input input-bordered w-full text-black"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-600 hover:bg-red-700 text-white">
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center mt-4 text-black">
            Don’t have an account?{" "}
            <Link to="/register" className="text-red-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
