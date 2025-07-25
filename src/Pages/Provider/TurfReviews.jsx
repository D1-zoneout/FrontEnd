import React, { useEffect, useState } from "react";

const dummyReviews = [
  {
    id: 1,
    user: "Ritika Jain",
    turf: "Dream Turf Arena",
    date: "2025-07-20",
    rating: 5,
    comment: "Excellent turf and lighting! Great experience.",
  },
  {
    id: 2,
    user: "Aman Kapoor",
    turf: "SkyPlay Turf",
    date: "2025-07-18",
    rating: 4,
    comment: "Nice turf, but washroom needs maintenance.",
  },
  {
    id: 3,
    user: "Priya Nair",
    turf: "TurfZone Arena",
    date: "2025-07-15",
    rating: 3,
    comment: "Okay turf, slots often run late.",
  },
];

const TurfReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Replace this with actual API call later
    setTimeout(() => {
      setReviews(dummyReviews);
    }, 300);
  }, []);

  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-500">
        {Array.from({ length: 5 }).map((_, idx) => (
          <svg
            key={idx}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${
              idx < rating ? "fill-current" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.284 3.948a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.284 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.54-1.118l1.284-3.948a1 1 0 00-.364-1.118L2.08 9.375c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.284-3.948z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Turf Reviews</h1>

        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews available.</p>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-2xl p-4 bg-gray-50 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <div>
                    <p className="font-semibold text-lg text-indigo-700">{review.user}</p>
                    <p className="text-sm text-gray-500">
                      {review.turf} · {review.date}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">{renderStars(review.rating)}</div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TurfReviews;
