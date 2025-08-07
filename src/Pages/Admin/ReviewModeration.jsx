import React, { useState } from "react";
import AdminNavbar from '../../Components/admin/AdminNavbar';
import AdminSidebar from '../../Components/admin/AdminSidebar';
const reviews = [
  {
    id: 1,
    userId: "U001",
    turfId: "T001",
    rating: 4,
    review: "Great turf and well maintained!"
  },
  {
    id: 2,
    userId: "U002",
    turfId: "T002",
    rating: 5,
    review: "Loved the experience. Highly recommend."
  },
  {
    id: 3,
    userId: "U003",
    turfId: "T003",
    rating: 3,
    review: "Average turf. Needs better lighting."
  }
];

export default function ReviewModeration() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [allReviews, setAllReviews] = useState(reviews);

  const handleDelete = (id) => {
    const updatedReviews = allReviews.filter((r) => r.id !== id);
    setAllReviews(updatedReviews);
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      <div className="fixed top-0 left-0 h-full w-64 z-10 shadow-md bg-white">
        <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      <div className="flex flex-col flex-1 ml-64">
        <div className="fixed top-0 left-64 right-0 z-10 shadow bg-white">
          <AdminNavbar setOpen={setSidebarOpen} />
        </div>

        <div className="mt-20 overflow-y-auto h-[calc(100vh-5rem)] px-6 py-4">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Review Moderation</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow rounded-lg">
              <thead>
                <tr className="bg-indigo-100 text-indigo-800">
                  <th className="py-3 px-6 border border-gray-300 text-left">User ID</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Turf ID</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Rating</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Review</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {allReviews.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-50">
                    <td className="py-3 px-6 border border-gray-300">{review.userId}</td>
                    <td className="py-3 px-6 border border-gray-300">{review.turfId}</td>
                    <td className="py-3 px-6 border border-gray-300">{review.rating}</td>
                    <td className="py-3 px-6 border border-gray-300">{review.review}</td>
                    <td className="py-3 px-6 border border-gray-300">
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
