import React, { useEffect, useState } from "react";

const dummyBookings = [
  {
    id: "BK001",
    user: "Rohan Sharma",
    turf: "Dream Turf Arena",
    date: "2025-07-23",
    time: "6:00 PM – 7:00 PM",
    payment: "₹800",
    status: "Completed",
  },
  {
    id: "BK002",
    user: "Anita Desai",
    turf: "SkyPlay Turf",
    date: "2025-07-22",
    time: "7:00 PM – 8:00 PM",
    payment: "₹1000",
    status: "Cancelled",
  },
  {
    id: "BK003",
    user: "Vikas Patel",
    turf: "TurfZone Arena",
    date: "2025-07-20",
    time: "8:00 AM – 9:00 AM",
    payment: "₹700",
    status: "Completed",
  },
];

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Simulate fetching from API
    setTimeout(() => setBookings(dummyBookings), 300);
  }, []);

  return (
    
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6">Booking History</h1>

        <div className="overflow-x-auto shadow border rounded-2xl bg-gray-50">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-indigo-100 text-indigo-800">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Booking ID</th>
                <th className="px-6 py-3 text-left font-semibold">User</th>
                <th className="px-6 py-3 text-left font-semibold">Turf</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-left font-semibold">Time</th>
                <th className="px-6 py-3 text-left font-semibold">Payment</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-6 text-gray-500">
                    No booking history available.
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4">{booking.id}</td>
                    <td className="px-6 py-4">{booking.user}</td>
                    <td className="px-6 py-4">{booking.turf}</td>
                    <td className="px-6 py-4">{booking.date}</td>
                    <td className="px-6 py-4">{booking.time}</td>
                    <td className="px-6 py-4 font-medium">{booking.payment}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-xl text-xs font-semibold ${
                          booking.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "Cancelled"
                            ? "bg-red-100 text-red-600"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
