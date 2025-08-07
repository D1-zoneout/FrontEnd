import { useState } from "react";
import ProviderSidebar from "../../Components/ProviderSidebar";
import ProviderNavbar from "../../Components/ProviderNavbar";


export default function BookingPage() {
  const [open, setOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const bookings = [
    {
      id: 1,
      turfName: "Green Field Turf",
      userName: "Ravi Patil",
      slotTime: "08:00 AM",
      date: "2025-07-30",
    },
    {
      id: 2,
      turfName: "City Sports Arena",
      userName: "Sneha Joshi",
      slotTime: "10:00 AM",
      date: "2025-07-30",
    },
    {
      id: 3,
      turfName: "Elite Play Zone",
      userName: "Amit Verma",
      slotTime: "06:00 PM",
      date: "2025-07-31",
    },
  ];

  const handleView = (booking) => {
    setSelectedBooking(booking);
  };

  const handleClosePopup = () => {
    setSelectedBooking(null);
  };

  const handleCancel = (id) => {
    alert(`❌ Booking ID ${id} has been cancelled.`);
    setSelectedBooking(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <ProviderSidebar open={open} setOpen={setOpen} />
      <div className="flex-1">
        <ProviderNavbar setOpen={setOpen} />

        <main className="p-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">Bookings Overview</h1>

          <div className="overflow-x-auto bg-white shadow rounded-xl p-6">
            <table className="min-w-full table-auto">
              <thead className="bg-indigo-100 text-indigo-700">
                <tr>
                  <th className="px-4 py-2 text-left">Turf Name</th>
                  <th className="px-4 py-2 text-left">User Name</th>
                  <th className="px-4 py-2 text-left">Slot Time</th>
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b">
                    <td className="px-4 py-3">{booking.turfName}</td>
                    <td className="px-4 py-3">{booking.userName}</td>
                    <td className="px-4 py-3">{booking.slotTime}</td>
                    <td className="px-4 py-3">{booking.date}</td>
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => handleView(booking)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-lg shadow"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedBooking && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
                <h2 className="text-2xl font-bold text-indigo-600 mb-4">Booking Details</h2>
                <p className="text-gray-700 mb-2">🔰 <span className="font-medium">Turf:</span> {selectedBooking.turfName}</p>
                <p className="text-gray-700 mb-2">👤 <span className="font-medium">Booked By:</span> {selectedBooking.userName}</p>
                <p className="text-gray-700 mb-2">⏰ <span className="font-medium">Slot Time:</span> {selectedBooking.slotTime}</p>
                <p className="text-gray-700 mb-4">📅 <span className="font-medium">Date:</span> {selectedBooking.date}</p>

                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => handleCancel(selectedBooking.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Cancel Booking
                  </button>
                  <button
                    onClick={handleClosePopup}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
