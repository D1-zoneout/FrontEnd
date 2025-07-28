import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

const reviews = [
  {
    id: 1,
    user: 'Rohit Sharma',
    turf: 'Sky Turf',
    rating: 4,
    comment: 'Great place!',
    date: '2025-07-23',
    approved: true,
  },
  {
    id: 2,
    user: 'Anjali Mehta',
    turf: 'Sunset Arena',
    rating: 2,
    comment: 'Not well maintained',
    date: '2025-07-22',
    approved: false,
  },
]

const ReviewModeration = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      <AdminSidebar />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Review Moderation</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
              <thead>
                <tr className="bg-indigo-600 text-white text-left">
                  <th className="px-6 py-3 first:rounded-tl-lg last:rounded-tr-lg">User</th>
                  <th className="px-6 py-3">Turf</th>
                  <th className="px-6 py-3">Rating</th>
                  <th className="px-6 py-3">Comment</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3 first:rounded-tr-lg last:rounded-tr-lg">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {reviews.map((review, idx) => (
                  <tr
                    key={review.id}
                    className={`hover:bg-gray-50 ${
                      idx === reviews.length - 1 ? 'last:rounded-b-lg' : ''
                    }`}
                  >
                    <td className="px-6 py-4 first:rounded-bl-lg">{review.user}</td>
                    <td className="px-6 py-4">{review.turf}</td>
                    <td className="px-6 py-4">{review.rating}⭐</td>
                    <td className="px-6 py-4">{review.comment}</td>
                    <td className="px-6 py-4">{review.date}</td>
                    <td className="px-6 py-4 last:rounded-br-lg">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${
                          review.approved
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {review.approved ? 'Approved' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ReviewModeration
