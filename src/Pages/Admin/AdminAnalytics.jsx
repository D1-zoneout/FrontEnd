import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts'

const userData = [
  { name: 'Jan', users: 200 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 400 },
  { name: 'Apr', users: 500 },
  { name: 'May', users: 600 },
  { name: 'Jun', users: 750 },
]

const bookingData = [
  { name: 'Football', value: 40 },
  { name: 'Cricket', value: 30 },
  { name: 'Tennis', value: 20 },
  { name: 'Badminton', value: 10 }
]

const COLORS = ['#6366F1', '#818CF8', '#A5B4FC', '#C7D2FE'] // Indigo theme

const AdminAnalytics = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 bg-gray-100">
        <AdminNavbar />

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-6">Analytics Overview</h2>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-600 mb-2">Total Users</h3>
              <p className="text-3xl font-bold text-indigo-700">1,234</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-600 mb-2">Total Bookings</h3>
              <p className="text-3xl font-bold text-indigo-700">2,980</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-600 mb-2">Total Revenue</h3>
              <p className="text-3xl font-bold text-indigo-700">₹4,50,000</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bar Chart for Monthly Users */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-4">Monthly User Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#6366F1" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart for Booking Distribution */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-4">Booking Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={bookingData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {bookingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminAnalytics
