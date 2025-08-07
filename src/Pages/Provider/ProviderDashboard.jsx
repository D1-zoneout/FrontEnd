import React from "react";
import ProviderNavbar from "../../Components/ProviderNavbar";
import ProviderSidebar from "../../Components/ProviderSidebar";

function ProviderDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* <ProviderSidebar /> */}

      <div className="flex-1 ml-64">
        <ProviderNavbar />

        <main className="p-6 mt-16">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

          {/* Top Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { label: "Total Turfs", value: 3 },
              { label: "Total Bookings", value: 128 },
              { label: "Total Revenue", value: "₹54,000" },
              { label: "Active Requests", value: 7 },
            ].map((item, idx) => (
              <div key={idx} className="bg-white shadow rounded p-4">
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-xl font-semibold text-gray-900 mt-2">{item.value}</div>
              </div>
            ))}
          </div>

          {/* Booking Chart (Placeholder Box) */}
          <div className="bg-white shadow rounded p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Weekly Bookings Overview</h2>
            <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-500">
              {/* Placeholder for chart */}
              <span>Chart will appear here</span>
            </div>
          </div>

          {/* Recent Bookings Table */}
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Bookings</h2>
            <table className="min-w-full table-auto text-sm text-left text-gray-700">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="px-4 py-2">User</th>
                  <th className="px-4 py-2">Turf</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { user: "Rahul", turf: "Greenfield", date: "2025-07-20", status: "Confirmed" },
                  { user: "Anjali", turf: "Sports Arena", date: "2025-07-19", status: "Pending" },
                  { user: "Vikram", turf: "PlayZone", date: "2025-07-18", status: "Cancelled" },
                ].map((b, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{b.user}</td>
                    <td className="px-4 py-2">{b.turf}</td>
                    <td className="px-4 py-2">{b.date}</td>
                    <td className={`px-4 py-2 font-medium ${b.status === "Confirmed" ? "text-green-600" : b.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>
                      {b.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProviderDashboard;
