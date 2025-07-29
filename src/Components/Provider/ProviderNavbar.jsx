import React from 'react';
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react'; 

function ProviderNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm h-16 px-6 flex justify-between items-center z-50">
      <div className="text-lg font-semibold text-indigo-600">Turfy Provider</div>
      <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
        {/* Optional Notification Icon */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-600 hover:text-indigo-600 cursor-pointer" />
          {/* Example notification badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
        </div>
        <Link to="/provider/profile" className="hover:text-indigo-600">Profile</Link>
        <Link to="/provider/login" className="hover:text-indigo-600">Logout</Link>
      </div>
    </nav>
  );
}

export default ProviderNavbar;
