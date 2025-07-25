import React, { useState, useEffect } from "react";

const mockPayments = [
  {
    id: 1,
    turfName: "Star Turf Arena",
    user: "Shivam Patel",
    amount: 1200,
    date: "2025-07-15",
    status: "Completed",
  },
  {
    id: 2,
    turfName: "Green Turf Zone",
    user: "Neha Kumari",
    amount: 950,
    date: "2025-07-10",
    status: "Completed",
  },
  {
    id: 3,
    turfName: "Kick-Off Field",
    user: "Rahul Verma",
    amount: 1400,
    date: "2025-06-30",
    status: "Pending",
  },
];

const PaymentManagement = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Replace with real API call
    setTimeout(() => {
      setPayments(mockPayments);
    }, 300);
  }, []);

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Payment Management</h1>

        <div className="overflow-x-auto bg-gray-50 rounded-2xl shadow">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
              <tr>
                <th className="px-6 py-4">Turf</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Amount (₹)</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No payment records found.
                  </td>
                </tr>
              ) : (
                payments.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b hover:bg-gray-100 transition"
                  >
                    <td className="px-6 py-4 font-medium">{payment.turfName}</td>
                    <td className="px-6 py-4">{payment.user}</td>
                    <td className="px-6 py-4">₹{payment.amount}</td>
                    <td className="px-6 py-4">{payment.date}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          payment.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {payment.status}
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

export default PaymentManagement;
