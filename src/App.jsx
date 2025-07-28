import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserLogin from './Pages/User/UserLogin';
import UserRegister from './Pages/User/UserRegister';
import MyBookings from './Pages/User/MyBookings';
import CancelBooking from './Pages/User/CancelBooking';
import BookTurfPage from './Pages/User/BookTurfPage';
import HomePage from './Pages/User/HomePage';
import ExploreTurfs from './Pages/User/ExploreTurfs';
import TurfDetailsPage from './Pages/User/TurfDetailsPage';
import MyProfile from './Pages/User/MyProfile';
import EditProfile from './Pages/User/EditProfile';

function NavBar() {
  return (
    <nav className="bg-indigo-500 text-white p-4 flex gap-4 justify-center shadow-md">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/explore">Explore Turfs</Link>
      <Link to="/my-bookings">My Bookings</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/cancel-booking" element={<CancelBooking />} />
        <Route path="/book-turf" element={<BookTurfPage />} />
        <Route path="/explore" element={<ExploreTurfs />} />
        <Route path="/turf/:id" element={<TurfDetailsPage />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}