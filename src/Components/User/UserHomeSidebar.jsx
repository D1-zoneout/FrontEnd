import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Dashboard', path: '/user/dashboard' },
  { label: 'Explore Turfs', path: '/user/explore' },
  { label: 'My Bookings', path: '/user/bookings' },
  { label: 'Payments', path: '/user/payments' },
  { label: 'Reviews', path: '/user/reviews' },
  { label: 'Profile', path: '/user/profile' },
  { label: 'Contact Us', path: '/user/contact' },
  { label: 'Logout', path: '/user/login' },
];

const UserSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen sticky top-0 bg-white shadow-md p-6">
      <h2 className="text-2xl font-bold text-indigo-600 mb-8">ZONEOUT</h2>
      <nav className="space-y-3">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`block px-4 py-2 rounded-lg hover:bg-indigo-100 text-gray-700 transition ${
              location.pathname === link.path ? 'bg-indigo-200 font-semibold text-indigo-800' : ''
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
