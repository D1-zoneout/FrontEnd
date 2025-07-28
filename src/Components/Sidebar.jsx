import { Link } from 'react-router-dom';

export default function Sidebar({ open, setOpen }) {
  return (
    <aside className={`${open ? 'block' : 'hidden'} md:flex w-64 bg-white shadow-md p-6 flex-col gap-4 absolute md:static z-50 h-full`}>
      <button className="md:hidden mb-4 text-indigo-500" onClick={() => setOpen(false)}>✕</button>
      <h2 className="text-indigo-500 text-xl font-bold mb-4">Menu</h2>
      <Link to="/" className="hover:underline text-gray-700" onClick={() => setOpen(false)}>Home</Link>
      <Link to="/explore" className="hover:underline text-gray-700" onClick={() => setOpen(false)}>Explore Turfs</Link>
      <Link to="/my-bookings" className="hover:underline text-gray-700" onClick={() => setOpen(false)}>My Bookings</Link>
      <Link to="/profile" className="hover:underline text-gray-700" onClick={() => setOpen(false)}>Profile</Link>
    </aside>
  );
}
