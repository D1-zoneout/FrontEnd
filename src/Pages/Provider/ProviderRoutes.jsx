import React from 'react'
import { Routes , Route } from 'react-router-dom';
import ProviderLogin from "./ProviderLogin";
import ProviderSignUp from './ProviderSignUp';
import AddTurf from './AddTurf';
import ProviderProfile from './ProviderProfile';
import BookingHistory from './BookingHistory';
import PaymentManagement from './PaymentManagement';
import TurfAnalytics from './TurfAnalytics';
import TurfReviews from './TurfReviews';
function ProviderRoutes() {
  return (
   <Routes>
    
      <Route path="/turf-analytics" element={<TurfAnalytics />} />
      <Route path="/turf-reviews" element={<TurfReviews />} />
      <Route path="/payment-management" element={<PaymentManagement />} />
      <Route path="/login" element={<ProviderLogin />} />
      <Route path="/register" element={<ProviderSignUp />} />
      <Route path="/add-turf" element={<AddTurf />} />
      <Route path="/profile" element={<ProviderProfile />} />
      <Route path="/booking-history" element={<BookingHistory />} />
      {/* Add more provider-specific routes here */}
   </Routes>
  )
}

export default ProviderRoutes;
