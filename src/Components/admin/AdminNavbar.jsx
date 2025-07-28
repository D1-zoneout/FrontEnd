import React from 'react'
import { Bell } from 'lucide-react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-600">Admin Panel</h1>
      <div className="flex items-center gap-6 text-gray-700">
        <Link to="/admin/notifications" className="relative hover:text-purple-600">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </Link>
        <span>Welcome, Admin</span>
      </div>
    </nav>
  )
}

export default AdminNavbar
