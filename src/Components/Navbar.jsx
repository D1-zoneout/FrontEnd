import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#22c55e] text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center">
        <Link to="/user/home" className="text-xl font-semibold">
          TurfMate
        </Link>
        <div className="space-x-4">
          <Link to="/user/explore" className="hover:underline">
            Explore Turfs
          </Link>
          <Link to="/user/bookings" className="hover:underline">
            My Bookings
          </Link>
          <Link to="/user/profile" className="hover:underline">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
