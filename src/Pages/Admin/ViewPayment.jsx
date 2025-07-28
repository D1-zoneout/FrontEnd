import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import AdminSidebar from '../../Components/Admin/AdminSidebar'

const payments = [
  {
    id: 1,
    user: 'Amit Verma',
    turf: 'Sunset Arena',
    amount: 1200,
    date: '2025-07-24',
    status: 'Success',
    mode: 'UPI',
  },
  {
    id: 2,
    user: 'Priya Singh',
    turf: 'Sky Turf',
    amount: 1500,
    date: '2025-07-23',
    status: 'Failed',
    mode: 'Card',
  },
]

const ViewPayments = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">All Payments</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-indigo-600 text-white text-left">
                  <th className="px-6 py-3">User</th>
                  <th className="px-6 py-3">Turf</th>
                  <th className="px-6 py-3">Amount (₹)</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Mode</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, idx) => (
                  <tr
                    key={payment.id}
                    className={`border-b last:border-none ${
                      idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'
                    } hover:bg-gray-200 transition`}
                  >
                    <td className="px-6 py-4">{payment.user}</td>
                    <td className="px-6 py-4">{payment.turf}</td>
                    <td className="px-6 py-4">₹{payment.amount}</td>
                    <td className="px-6 py-4">{payment.date}</td>
                    <td className="px-6 py-4">{payment.mode}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          payment.status === 'Success'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {payment.status}
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

export default ViewPayments
