import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingRequests() {
  const navigate = useNavigate();

  const [requests, setRequests] = useState([
    {
      id: 1,
      user: 'Raj Verma',
      turf: 'Turf Galaxy',
      date: '2025-07-26',
      time: '06:00 AM - 07:00 AM',
      price: 500,
      status: 'Pending',
    },
    {
      id: 2,
      user: 'Priya Shah',
      turf: 'Turf King',
      date: '2025-07-27',
      time: '07:00 AM - 08:00 AM',
      price: 600,
      status: 'Approved',
    },
  ]);

  const updateStatus = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  return (
    <>
      <ProviderNavbar />
      <div className="min-h-screen bg-white px-6 py-10">
        {/* Back to Dashboard Button */}
        <button
          onClick={() => navigate('/provider/dashboard')}
          className="mb-6 text-sm text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-center">Booking Requests</h2>

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
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="py-2 px-4">{req.user}</td>
                <td className="py-2 px-4">{req.turf}</td>
                <td className="py-2 px-4">{req.date}</td>
                <td className="py-2 px-4">{req.time}</td>
                <td className="py-2 px-4">₹{req.price}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      req.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : req.status === 'Approved'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="py-2 px-4 space-x-2">
                  {req.status === 'Pending' ? (
                    <>
                      <button
                        onClick={() => updateStatus(req.id, 'Approved')}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(req.id, 'Rejected')}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-400 italic">No Action</span>
                  )}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No booking requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default BookingRequests;
