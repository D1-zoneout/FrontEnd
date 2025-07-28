import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import HomePage from './HomePage';
import ExploreTurfs from './ExploreTurfs';
import TurfDetailsPage from './TurfDetailsPage';
import BookTurfPage from './BookTurfPage';
import MyBookings from './MyBookings';
import CancelBooking from './CancelBooking';
import MyProfile from './MyProfile';
import EditProfile from './EditProfile';
import { useState } from 'react';

export default function UserRoutes() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex-1">
          <header className="flex justify-between items-center p-4 shadow-md rounded-b-2xl bg-white mb-6">
            <button className="md:hidden text-indigo-500" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
            <h1 className="text-indigo-500 text-2xl font-bold"><Link to="/">Turf Booking</Link></h1>
            <nav className="hidden md:flex gap-4">
              <Link to="/explore" className="text-indigo-500 hover:underline">Explore</Link>
              <Link to="/my-bookings" className="text-indigo-500 hover:underline">My Bookings</Link>
              <Link to="/profile" className="text-indigo-500 hover:underline">Profile</Link>
            </nav>
          </header>
          <div className="p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<UserRegister />} />
              <Route path="/login" element={<UserLogin />} />
              <Route path="/explore" element={<ExploreTurfs />} />
              <Route path="/turf/:id" element={<TurfDetailsPage />} />
              <Route path="/book/:id" element={<BookTurfPage />} />
              <Route path="/my-bookings" element={<MyBookings />} />
              <Route path="/cancel/:id" element={<CancelBooking />} />
              <Route path="/profile" element={<MyProfile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}