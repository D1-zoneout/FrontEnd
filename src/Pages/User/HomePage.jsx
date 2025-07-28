export default function HomePage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center p-4 shadow-md rounded-2xl bg-white mb-6">
        <h1 className="text-indigo-500 text-2xl font-bold">Turf Booking</h1>
        <nav className="flex gap-4">
          <a href="/explore" className="text-indigo-500 hover:underline">Explore</a>
          <a href="/my-bookings" className="text-indigo-500 hover:underline">My Bookings</a>
          <a href="/profile" className="text-indigo-500 hover:underline">Profile</a>
        </nav>
      </header>
      <main className="text-center text-gray-700 mt-10">
        <h2 className="text-3xl font-bold mb-4">Find and Book Your Favorite Turfs</h2>
        <p className="text-lg">Easily explore, book, and manage turf bookings at your convenience.</p>
      </main>
    </div>
  );
}