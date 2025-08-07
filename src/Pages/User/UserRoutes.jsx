import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import UserSidebar from '../../Components/User/UserSidebar';
import Notifications from './Notifications'
import UserLogin from './UserLogin'
import ContactUs from './ContactUs'
import Payments from './Payments'
import UserReviews from './UserReviews';
import ExploreTurfs from './ExploreTurfs';
import TurfDetailsPage from './TurfDetailsPage';
import BookTurfPage from './BookTurfPage';
import MyBookings from './MyBookings';
import CancelBooking from './CancelBooking';
import MyProfile from './MyProfile';
import EditProfile from './EditProfile';
import UserRegister from './UserRegister';
import UserDashboard from './UserDashBoard';
// import Payments from './Payments';
export default function UserRoutes() {


  return (
   
            <Routes>
              
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="register" element={<UserRegister />} />
              <Route path="login" element={<UserLogin />} />
              <Route path = "payment" element={<Payments/>}/>
              <Route path="explore" element={<ExploreTurfs />} />
              <Route path="turf/:id" element={<TurfDetailsPage />} />
              <Route path="book/:id" element={<BookTurfPage />} />
              <Route path="my-bookings" element={<MyBookings />} />
              <Route path="cancel/:id" element={<CancelBooking />} />
              <Route path="profile" element={<MyProfile />} />
              <Route path="profile/edit" element={<EditProfile />} />
              <Route path="dashboard" element={<UserDashboard />} />
            </Routes>
          
  );
}

