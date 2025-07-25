import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TurfReviews() {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: 'Raj Verma',
      turf: 'Turf Galaxy',
      rating: 5,
      message: 'Excellent turf, clean and well-maintained!',
      date: '2025-07-20',
    },
    {
      id: 2,
      user: 'Priya Shah',
      turf: 'Turf King',
      rating: 4,
      message: 'Good lighting and staff support. Will book again.',
      date: '2025-07-22',
    },
    {
      id: 3,
      user: 'Amit Desai',
      turf: 'Turf Supreme',
      rating: 2,
      message: 'Ground was wet and slippery. Needs maintenance.',
      date: '2025-07-24',
    },
  ]);

  const renderStars = (count) => {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate('/provider/dashboard')}
        className="mb-6 text-sm text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-center">Turf Reviews</h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="border rounded-lg shadow p-4 bg-gray-50"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold text-gray-800">
                  {review.user} on <span className="text-indigo-600">{review.turf}</span>
                </p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="text-yellow-500 font-bold text-lg">
                {renderStars(review.rating)}
              </div>
            </div>
            <p className="text-gray-700">{review.message}</p>
          </div>
        ))}

        {reviews.length === 0 && (
          <p className="text-center text-gray-500">No reviews available.</p>
        )}
      </div>
    </div>
  );
}

export default TurfReviews;
