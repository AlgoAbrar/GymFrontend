import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import apiClient from "../services/api-client";

export default function Payments() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        
        const res = await apiClient.get("/gym/orders/");
        setOrders(res.data || []);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const retryPayment = async (order) => {
    try {
      
      const payload = {
        orderId: order.id,
        amount: order.total_price || order.amount || 0,
        numItems: order.items_count || 1,
      };
      const res = await apiClient.post("/payment/initiate/", payload);
      // Expect response.payment_url or response.data.payment_url
      const payment_url = res.data?.payment_url || res.data?.GatewayPageURL;
      if (payment_url) {
        window.location.href = payment_url;
      } else {
        alert("Payment initiation failed (no payment URL returned).");
      }
    } catch (err) {
      console.error("Payment initiation error:", err);
      alert("Payment initiation failed. Check console for details.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Orders & Payments
          </h2>

          {loading ? (
            <div className="text-gray-300">Loading...</div>
          ) : orders.length === 0 ? (
            <div className="text-gray-400">You have no orders yet.</div>
          ) : (
            <div className="space-y-4">
              {orders.map((o) => (
                <div
                  key={o.id}
                  className="bg-neutral-800 border border-red-600 p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <div className="font-semibold text-red-300">
                      Order #{o.id}
                    </div>
                    <div className="text-gray-300">
                      Plan: {o.plan_name || o.plan || "N/A"}
                    </div>
                    <div className="text-gray-400">
                      Total: ৳{o.total_price ?? o.amount ?? 0}
                    </div>
                    <div className="text-sm text-gray-500">
                      Status: {o.status}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {o.status && o.status.toLowerCase() !== "paid" ? (
                      <button
                        className="btn bg-red-600 border-none"
                        onClick={() => retryPayment(o)}
                      >
                        Pay
                      </button>
                    ) : (
                      <span className="badge badge-success">Paid</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
