import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ExploreTurfs from './ExploreTurfs';
import TurfDetailsPage from './TurfDetailsPage';
import BookTurfPage from './BookTurfPage';
import MyBookings from './MyBookings';
import CancelBooking from './CancelBooking';
import MyProfile from './MyProfile';
import EditProfile from './EditProfile';


export default function UserRoutes() {


  return (
   
            <Routes>
             
              <Route path="/" element={<HomePage />} /> 
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