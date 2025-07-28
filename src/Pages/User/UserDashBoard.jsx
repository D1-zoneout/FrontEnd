import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const sampleData = [
  { name: 'Mon', bookings: 4 },
  { name: 'Tue', bookings: 7 },
  { name: 'Wed', bookings: 3 },
  { name: 'Thu', bookings: 6 },
  { name: 'Fri', bookings: 9 },
  { name: 'Sat', bookings: 5 },
  { name: 'Sun', bookings: 2 },
];

const UserDashboard = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-600 mb-6">Welcome to Your Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link to="/user/bookings" className="bg-indigo-100 p-5 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">My Bookings</h2>
          <p className="text-sm text-gray-600">View and manage your booked turfs</p>
        </Link>

        <Link to="/user/explore" className="bg-indigo-100 p-5 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Explore Turfs</h2>
          <p className="text-sm text-gray-600">Find and book available turf slots</p>
        </Link>

        <Link to="/user/payments" className="bg-indigo-100 p-5 rounded-xl shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Payments</h2>
          <p className="text-sm text-gray-600">View your wallet and transactions</p>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Weekly Booking Activity</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserDashboard;
