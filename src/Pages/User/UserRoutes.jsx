import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import UserSidebar from '../../components/User/UserSidebar'; // adjust path if needed
import Footer from '../../Components/common/Fotter';

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

const UserRoutes = () => {
  return (
<<<<<<< vaishnavi
   
            <Routes>
             
              <Route path="/" element={<HomePage />} />
              <Route path="register" element={<UserRegister />} />
              <Route path="login" element={<UserLogin />} />
              <Route path="explore" element={<ExploreTurfs />} />
              <Route path="turf/:id" element={<TurfDetailsPage />} />
              <Route path="book/:id" element={<BookTurfPage />} />
              <Route path="my-bookings" element={<MyBookings />} />
              <Route path="cancel/:id" element={<CancelBooking />} />
              <Route path="profile" element={<MyProfile />} />
              <Route path="profile/edit" element={<EditProfile />} />
            </Routes>
          
  );
}

=======
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<UserDashBoard />} />
        <Route path="explore" element={<ExploreTurfs />} />
        <Route path="book" element={<BookTurfPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="booking-confirmed" element={<BookingConfirmed />} />

        <Route path="cancel" element={<CancelBooking />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="my-bookings" element={<MyBookings />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="payments" element={<Payments />} />
        <Route path="turf-details/:id" element={<TurfDetailsPage />} />
        <Route path="reviews" element={<UserReviews />} />
      </Route>

      {/* Login and Register should not show sidebar/footer */}
      <Route path="login" element={<UserLogin />} />
      <Route path="register" element={<UserRegister />} />
    </Routes>
  )
}
>>>>>>> main
