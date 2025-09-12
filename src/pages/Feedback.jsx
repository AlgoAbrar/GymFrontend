import React, { useEffect, useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import apiClient from "../services/api-client";
import useAuthContext from "../hooks/useAuthContext";

export default function Feedback() {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await apiClient.get("/reports/feedback/");
        setReviews(res.data || []);
      } catch (err) {
        console.error("Failed to fetch feedbacks:", err);
      }
    };
    load();
  }, []);

  const submitFeedback = async (e) => {
    e.preventDefault();
    if (!comment) return alert("Please add a comment.");
    try {
      const payload = { comment, rating };
      await apiClient.post("/feedback/", payload);
      // reload
      const res = await apiClient.get("/feedback/");
      setReviews(res.data || []);
      setComment("");
      setRating(5);
      alert("Feedback submitted.");
    } catch (err) {
      console.error("Failed to submit feedback:", err);
      alert("Failed to submit feedback.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Class Feedback
          </h2>

          {/* Submit form (only if logged in) */}
          {user ? (
            <form
              onSubmit={submitFeedback}
              className="bg-neutral-800 border border-red-600 p-4 rounded-lg mb-6"
            >
              <label className="block text-gray-300 mb-2">Your Review</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="textarea w-full bg-neutral-900 text-white mb-2"
                rows={3}
              />
              <label className="block text-gray-300 mb-2">Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="select mb-4"
              >
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
              </select>
              <div>
                <button className="btn bg-red-600 border-none">
                  Submit Feedback
                </button>
              </div>
            </form>
          ) : (
            <div className="text-gray-400 mb-6">
              Please log in to submit feedback.
            </div>
          )}

          {/* Reviews list */}
          {loading ? (
            <div className="text-gray-300">Loading...</div>
          ) : reviews.length === 0 ? (
            <div className="text-gray-400">No feedback yet.</div>
          ) : (
            <div className="space-y-4">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-neutral-800 border border-red-600 p-4 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-white">
                      {r.user?.email || r.user || "Member"}
                    </div>
                    <div className="text-yellow-400">{r.rating} ⭐</div>
                  </div>
                  <p className="text-gray-300 mt-2">{r.comment}</p>
                  <div className="text-sm text-gray-500 mt-1">
                    {new Date(r.created_at || r.created).toLocaleString()}
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
