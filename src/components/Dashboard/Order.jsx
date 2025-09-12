import React, { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import useAuthContext from "../../hooks/useAuthContext";

export default function Order() {
  const { user, authTokens } = useAuthContext();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await apiClient.get("/orders/", {
          headers: { Authorization: `JWT ${authTokens?.access}` },
        });
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders", err);
      }
    };
    if (authTokens) fetchOrders();
  }, [authTokens]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-red-500 mb-4">My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.plan_name}</td>
                <td>{order.status}</td>
                <td>{new Date(order.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
