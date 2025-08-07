import React, { useState } from "react";
import AdminNavbar from '../../Components/admin/AdminNavbar';
import AdminSidebar from '../../Components/admin/AdminSidebar';

const bookings = [
  {
    id: 1,
    bookingDate: "2025-08-01",
    status: true,
    turfName: "Green Field Turf",
    slotTime: "10:00 AM - 11:00 AM",
    user: "Rohan Deshmukh",
    paymentStatus: "Paid"
  },
  {
    id: 2,
    bookingDate: "2025-08-03",
    status: true,
    turfName: "City Sports Arena",
    slotTime: "06:00 PM - 07:00 PM",
    user: "Anjali Patil",
    paymentStatus: "paid"
  },
  {
    id: 3,
    bookingDate: "2025-08-05",
    status: false,
    turfName: "Elite Play Zone",
    slotTime: "05:00 PM - 06:00 PM",
    user: "Akshay Mane",
    paymentStatus: "Unpaid"
  }
];

export default function ViewAllBookings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 overflow-hidden">
      <div className="fixed top-0 left-0 h-full w-64 z-10 shadow-md bg-white">
        <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      <div className="flex flex-col flex-1 ml-64">
        <div className="fixed top-0 left-64 right-0 z-10 shadow bg-white">
          <AdminNavbar setOpen={setSidebarOpen} />
        </div>

        <div className="mt-20 overflow-y-auto h-[calc(100vh-5rem)] p-6">
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">All Bookings</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow rounded-lg">
              <thead>
                <tr className="bg-indigo-100 text-indigo-800">
                  <th className="py-3 px-6 border border-gray-300 text-left">Booking Date</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Turf Name</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Slot Time</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">User</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Payment</th>
                  <th className="py-3 px-6 border border-gray-300 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="py-3 px-6 border border-gray-300">{booking.bookingDate}</td>
                    <td className="py-3 px-6 border border-gray-300">{booking.turfName}</td>
                    <td className="py-3 px-6 border border-gray-300">{booking.slotTime}</td>
                    <td className="py-3 px-6 border border-gray-300">{booking.user}</td>
                    <td className="py-3 px-6 border border-gray-300">{booking.paymentStatus}</td>
                    <td className="py-3 px-6 border border-gray-300">
                      {booking.status ? (
                        <span className="text-green-600 font-semibold">Confirmed</span>
                      ) : (
                        <span className="text-red-500 font-semibold">Cancelled</span>
                      )}
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
