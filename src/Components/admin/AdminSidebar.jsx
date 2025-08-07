import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  'Dashboard',
  'Turfs',
  'Manage Providers',
  'Manage Users',
  'Bookings',
  'Payments',
  'Reviews'
  
]

const AdminSidebar = () => {
  const location = useLocation()

  return (
    <aside className="w-64 min-h-screen bg-white shadow-md">
      <nav className="p-6 flex flex-col gap-4">
        {menuItems.map((item) => (
          <Link
            key={item}
            to={`/admin/${item.toLowerCase().replace(/ /g, '')}`}
            className={`text-sm font-medium ${
              location.pathname.includes(item.toLowerCase()) ? 'text-indigo-600' : 'text-gray-800'
            } hover:text-indigo-700`}
          >
            {item}
          </Link>
        ))}
        <div className="mt-auto text-red-600 text-sm pt-6 border-t">
          {/* <button className="hover:underline">Logout</button> */}
          <Link to="/admin/login" className='hover:undeerline'> Logout</Link>
        </div>
      </nav>
    </aside>
  )
}

export default AdminSidebar
