import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

const bookings = [
  {
    id: 1,
    user: 'Amit Verma',
    turf: 'Sunset Arena',
    date: '2025-07-26',
    time: '6:00 PM - 7:00 PM',
    status: 'Confirmed',
  },
  {
    id: 2,
    user: 'Priya Singh',
    turf: 'Sky Turf',
    date: '2025-07-27',
    time: '8:00 AM - 9:00 AM',
    status: 'Cancelled',
  },
]

const ViewAllBookings = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6">All Bookings</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow overflow-hidden">
              <thead>
                <tr className="bg-indigo-600 text-white text-left">
                  <th className="px-6 py-3 first:rounded-tl-2xl last:rounded-tr-2xl">User</th>
                  <th className="px-6 py-3">Turf</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr
                    key={booking.id}
                    className={`border-b last:border-none hover:bg-gray-50 ${
                      index === bookings.length - 1 ? 'last:rounded-b-2xl' : ''
                    }`}
                  >
                    <td className="px-6 py-4">{booking.user}</td>
                    <td className="px-6 py-4">{booking.turf}</td>
                    <td className="px-6 py-4">{booking.date}</td>
                    <td className="px-6 py-4">{booking.time}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 text-sm rounded-full font-medium ${
                          booking.status === 'Confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {booking.status}
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

export default ViewAllBookings
