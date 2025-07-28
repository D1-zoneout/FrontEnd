import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import DashboardCard from '../../Components/Admin/DashboardCard'

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar />

        {/* Content */}
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <DashboardCard title="Total Users" value="1,234" />
            <DashboardCard title="Total Providers" value="123" />
            <DashboardCard title="Total Turfs" value="56" />
            <DashboardCard title="Total Bookings" value="876" />
            <DashboardCard title="Total Revenue" value="₹2,50,000" />
            <DashboardCard title="Pending Reviews" value="32" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
