import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const summaryData = {
  totalBookings: 128,
  totalRevenue: 58200,
  topSlot: "6:00 PM - 7:00 PM",
};

const popularSlotsData = [
  { slot: "6–7 AM", bookings: 15 },
  { slot: "8–9 AM", bookings: 9 },
  { slot: "4–5 PM", bookings: 21 },
  { slot: "5–6 PM", bookings: 31 },
  { slot: "6–7 PM", bookings: 39 },
  { slot: "7–8 PM", bookings: 23 },
  { slot: "8–9 PM", bookings: 10 },
];

const TurfAnalytics = () => {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Turf Analytics</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-indigo-50 p-6 rounded-2xl shadow">
            <h2 className="text-sm font-semibold text-gray-600">Total Bookings</h2>
            <p className="text-3xl font-bold mt-2 text-indigo-700">
              {summaryData.totalBookings}
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow">
            <h2 className="text-sm font-semibold text-gray-600">Total Revenue</h2>
            <p className="text-3xl font-bold mt-2 text-green-700">
              ₹{summaryData.totalRevenue.toLocaleString()}
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-2xl shadow">
            <h2 className="text-sm font-semibold text-gray-600">Top Slot</h2>
            <p className="text-xl font-bold mt-2 text-yellow-700">
              {summaryData.topSlot}
            </p>
          </div>
        </div>

        {/* Popular Slot Chart */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4">Popular Booking Slots</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={popularSlotsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="slot" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="bookings" fill="#6366F1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TurfAnalytics;

