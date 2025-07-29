import React from 'react';
import { Bell, UserCircle } from 'lucide-react';

const UserNavbar = () => {
  return (
    <nav className="h-16 w-full fixed top-0 left-0 z-50 bg-white border-b shadow-sm flex items-center justify-between px-6">
      {/* Logo */}
      <div className="text-2xl font-bold text-indigo-600 tracking-wide">
        ZONEOUT
      </div>

      {/* Right section: Notification + Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600 hover:text-indigo-600" />
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile Icon */}
        <button>
          <UserCircle className="w-8 h-8 text-gray-600 hover:text-indigo-600" />
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
