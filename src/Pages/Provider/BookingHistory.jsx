import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingHistory() {
  const navigate = useNavigate();

  const [history, setHistory] = useState([
    {
      id: 1,
      user: 'Raj Verma',
      turf: 'Turf Galaxy',
      date: '2025-07-20',
      time: '06:00 AM - 07:00 AM',
      price: 500,
      status: 'Completed',
    },
    {
      id: 2,
      user: 'Priya Shah',
      turf: 'Turf King',
      date: '2025-07-22',
      time: '07:00 AM - 08:00 AM',
      price: 600,
      status: 'Approved',
    },
    {
      id: 3,
      user: 'Amit Desai',
      turf: 'Turf Supreme',
      date: '2025-07-24',
      time: '08:00 AM - 09:00 AM',
      price: 700,
      status: 'Rejected',
    },
  ]);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/provider/dashboard')}
        className="mb-6 text-sm text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-center">Booking History</h2>

      <div className="overflow-x-auto max-w-5xl mx-auto">
        <table className="min-w-full border rounded-xl shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">User</th>
              <th className="py-3 px-4 text-left">Turf</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((booking) => (
              <tr key={booking.id} className="border-t">
                <td className="py-2 px-4">{booking.user}</td>
                <td className="py-2 px-4">{booking.turf}</td>
                <td className="py-2 px-4">{booking.date}</td>
                <td className="py-2 px-4">{booking.time}</td>
                <td className="py-2 px-4">₹{booking.price}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      booking.status === 'Completed'
                        ? 'bg-green-100 text-green-700'
                        : booking.status === 'Approved'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
            {history.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No booking history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingHistory;
