import React, { useEffect, useState } from "react";

const dummyTransactions = [
  {
    id: "TXN001",
    date: "2025-07-20",
    amount: 800,
    type: "Payment",
    method: "Razorpay",
  },
  {
    id: "TXN002",
    date: "2025-07-18",
    amount: 1000,
    type: "Refund",
    method: "UPI",
  },
  {
    id: "TXN003",
    date: "2025-07-17",
    amount: 600,
    type: "Payment",
    method: "Card",
  },
];

const Payments = () => {
  const [totalSpent, setTotalSpent] = useState(1500);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => setTransactions(dummyTransactions), 300);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-semibold">My Payments</h1>

        {/* Payments Summary */}
        <div className="bg-indigo-100 border border-indigo-200 text-indigo-800 rounded-2xl p-6 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-lg">Total Spent</p>
            <h2 className="text-3xl font-bold mt-1">₹{totalSpent}</h2>
          </div>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition"
            onClick={() => alert("Add payment method feature coming soon...")}
          >
            Add Payment Method
          </button>
        </div>

        {/* Payment History */}
        <div className="bg-gray-50 border rounded-2xl shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead className="bg-indigo-100 text-indigo-800">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Txn ID</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-left font-semibold">Amount</th>
                <th className="px-6 py-3 text-left font-semibold">Type</th>
                <th className="px-6 py-3 text-left font-semibold">Method</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No payment records found.
                  </td>
                </tr>
              ) : (
                transactions.map((txn) => (
                  <tr key={txn.id}>
                    <td className="px-6 py-4">{txn.id}</td>
                    <td className="px-6 py-4">{txn.date}</td>
                    <td className="px-6 py-4 font-medium">
                      ₹{txn.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-xl font-semibold ${
                          txn.type === "Payment"
                            ? "bg-red-100 text-red-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {txn.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">{txn.method}</td>
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

export default Payments;
