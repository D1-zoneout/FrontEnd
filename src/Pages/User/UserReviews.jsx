import React, { useState } from "react";
import { Star } from "lucide-react";

const SubmitReview = ({ turfName = "Star Turf Arena" }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      alert("Please provide both a rating and a comment.");
      return;
    }

    // Simulate sending review to backend
    console.log("Submitted Review:", {
      turf: turfName,
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    });

    setSuccess(true);
    setRating(0);
    setComment("");

    // Optionally: redirect or refresh review list
  };

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Leave a Review</h1>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-md space-y-5">
          <h2 className="text-xl font-semibold">{turfName}</h2>

          <div>
            <label className="block mb-1 text-sm font-medium">Your Rating:</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => setRating(val)}
                  onMouseEnter={() => setHoverRating(val)}
                  onMouseLeave={() => setHoverRating(0)}
                >
                  <Star
                    className={`w-7 h-7 transition ${
                      (hoverRating || rating) >= val
                        ? "text-yellow-500 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Your Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              placeholder="Write your review here..."
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Submit Review
          </button>

          {success && (
            <div className="text-green-600 font-medium mt-2">
              ✅ Thank you! Your review has been submitted.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmitReview;
