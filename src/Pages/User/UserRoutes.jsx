import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';

import BookTurfPage from './BookTurfPage';
import CancelBooking from './CancelBooking';
import ContactUs from './ContactUs';
import EditProfile from './EditProfile';
import ExploreTurfs from './ExploreTurfs';
import MyBookings from './MyBookings';
import MyProfile from './MyProfile';
import Notifications from './Notifications';
import Payments from './Payments';
import TurfDetailsPage from './TurfDetailsPage';
import UserDashBoard from './UserDashBoard';
import UserLogin from './UserLogin';
import UserRegister from './UserRegister';
import UserReviews from './UserReviews';
import BookingConfirmed from './BookingConfirmed';
import PaymentPage from './PaymentPage';
import HomePage from './HomePage';

export default function  UserRoutes ()  {
  return (
   
            <Routes>
              
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="register" element={<UserRegister />} />
              <Route path="login" element={<UserLogin />} />
              <Route path = "payment" element={<Payments/>}/>
              <Route path="explore" element={<ExploreTurfs />} />
              <Route path="turf/:id" element={<TurfDetailsPage />} />
              <Route path="book/:id" element={<BookTurfPage />} />
              <Route path="booking-confirmed" element={<BookingConfirmed />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="my-bookings" element={<MyBookings />} />
              <Route path="cancel/:id" element={<CancelBooking />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="reviews" element={<UserReviews />} />
              <Route path="payments" element={<Payments />} />
              <Route path="dashboard" element={<UserDashBoard />} />
              <Route path="contact-us" element={<ContactUs />} />
              <Route path="profile" element={<MyProfile />} />
              <Route path="profile/edit" element={<EditProfile />} />
              <Route path="dashboard" element={<UserDashboard />} />
            </Routes>
          
  ); 
}

