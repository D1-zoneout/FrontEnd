import React, { useState } from "react";
import AdminNavbar from '../../Components/admin/AdminNavbar';
import AdminSidebar from '../../Components/admin/AdminSidebar';

const initialPayments = [
  {
    id: 1,
    amountPaid: 1200,
    paymentStatus: true,
    paymentMethod: "RAZORPAY",
    razorpayPaymentId: "pay_Mn124abc",
    userId: 101,
    turfId: 201,
    bookingId: 301,
  },
  {
    id: 2,
    amountPaid: 900,
    paymentStatus: true,
    paymentMethod: "RAZORPAY",
    razorpayPaymentId: "pay_Mn456def",
    userId: 102,
    turfId: 202,
    bookingId: 302,
  },
  {
    id: 3,
    amountPaid: 1500,
    paymentStatus: false,
    paymentMethod: "RAZORPAY",
    razorpayPaymentId: "pay_Mn789ghi",
    userId: 103,
    turfId: 203,
    bookingId: 303,
  }
];

export default function ViewPayment() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [payments] = useState(initialPayments);

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
          <h2 className="text-2xl font-bold text-indigo-600 mb-6">Payment Details</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow rounded-lg">
              <thead>
                <tr className="bg-indigo-100 text-indigo-800">
                  <th className="py-3 px-6 border">User ID</th>
                  <th className="py-3 px-6 border">Turf ID</th>
                  <th className="py-3 px-6 border">Booking ID</th>
                  <th className="py-3 px-6 border">Amount Paid</th>
                  <th className="py-3 px-6 border">Payment Method</th>
                  <th className="py-3 px-6 border">Payment Status</th>
                  <th className="py-3 px-6 border">Razorpay ID</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="py-3 px-6 border text-center">{p.userId}</td>
                    <td className="py-3 px-6 border text-center">{p.turfId}</td>
                    <td className="py-3 px-6 border text-center">{p.bookingId}</td>
                    <td className="py-3 px-6 border text-center">₹{p.amountPaid}</td>
                    <td className="py-3 px-6 border text-center">{p.paymentMethod}</td>
                    <td className="py-3 px-6 border text-center">
                      {p.paymentStatus ? (
                        <span className="text-green-600 font-semibold">Paid</span>
                      ) : (
                        <span className="text-red-500 font-semibold">Unpaid</span>
                      )}
                    </td>
                    <td className="py-3 px-6 border text-center">{p.razorpayPaymentId}</td>
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
