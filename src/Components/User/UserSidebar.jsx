import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Dashboard', path: '/user/dashboard' },
  { label: 'Explore Turfs', path: '/user/explore' },
  { label: 'My Bookings', path: '/user/bookings' },
  { label: 'Book a Turf', path: '/user/book' },
  { label: 'Payments', path: '/user/payments' },
  { label: 'Reviews', path: '/user/reviews' },
  { label: 'Notifications', path: '/user/notifications' },
  { label: 'Profile', path: '/user/profile' },
  { label: 'Contact Us', path: '/user/contact' },
  { label: 'Logout', path: '/login' },
];

const UserSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-4 shadow-sm">
      <h2 className="text-xl font-semibold text-indigo-600 mb-6">User Panel</h2>
      <nav className="space-y-2">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`block px-4 py-2 rounded-xl hover:bg-indigo-100 text-gray-700 transition-all ${
              location.pathname === link.path ? 'bg-indigo-200 font-medium' : ''
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default UserSidebar;
