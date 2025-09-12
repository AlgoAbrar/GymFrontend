import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useAuthContext from "../hooks/useAuthContext";
import { FiCreditCard } from "react-icons/fi";

export default function Memberships() {
  const { user } = useAuthContext();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch membership plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await apiClient.get("/plans/");
        setPlans(response.data);
      } catch (err) {
        console.error("Failed to fetch membership plans:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);


  const handleSubscribe = async (planId, price) => {
    try {
      const response = await apiClient.post(
        "/payment/initiate/",
        {
          amount: price,
          orderId: planId,
          numItems: 1,
        },
        {
          headers: {
            Authorization: `JWT ${
              localStorage.getItem("authTokens")
                ? JSON.parse(localStorage.getItem("authTokens")).access
                : ""
            }`,
          },
        }
      );

      if (response.data.payment_url) {
        window.location.href = response.data.payment_url; // Redirect to SSLCommerz
      }
    } catch (err) {
      console.error("Payment initiation failed:", err);
      alert("Payment failed. Try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-white">
        <p>Loading membership plans...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-b from-black via-red-900 to-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Membership Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="card shadow-lg bg-neutral text-white border border-red-800"
          >
            <div className="card-body">
              <h2 className="card-title">{plan.name}</h2>
              <p className="text-gray-300">{plan.description}</p>
              <p className="text-xl font-bold mt-2">৳{plan.price}</p>
              <p className="text-sm text-gray-400">
                Duration: {plan.duration_in_days} days
              </p>
              {user ? (
                <button
                  onClick={() => handleSubscribe(plan.id, plan.price)}
                  className="btn bg-red-600 hover:bg-red-700 text-white mt-4 flex items-center gap-2"
                >
                  <FiCreditCard className="w-5 h-5" />
                  Subscribe
                </button>
              ) : (
                <p className="text-yellow-400 mt-4">
                  Please login to subscribe.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
