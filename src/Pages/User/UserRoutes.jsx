import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import UserSidebar from '../../Components/User/UserSidebar';
import Notifications from './Notifications'
import UserLogin from './UserLogin'
import ContactUs from './ContactUs'
import Payments from './Payments'
import UserReviews from './UserReviews';
import ExploreTurfs from './ExploreTurfs';
import MyProfile from './MyProfile'
import EditProfile from './EditProfile';
import UserDashboard from './UserDashboard';
import BookTurfPage from './BookTurfPage';
import CancelBooking from './CancelBooking';
import MyBookings from './MyBookings';

function UserRoutes() {
  return (
    <Routes>
         <Route
        path="/"
        element={
          <div className="flex">
            <UserSidebar />
            <main className="flex-1 p-4 bg-gray-50 min-h-screen">
              <Outlet />
            </main>
          </div>
        }
      >
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="login" element={<UserLogin />} />
        <Route path="signup" element={<UserLogin />} />
        <Route path="book" element={<BookTurfPage />} />
        <Route path="cancel" element={<CancelBooking />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="explore" element={<ExploreTurfs />} />
        <Route path="bookings" element={<MyBookings />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reviews" element={<UserReviews />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="*" element={<UserDashboard />} />
      </Route>
    </Routes>
  )
}

export default UserRoutes
