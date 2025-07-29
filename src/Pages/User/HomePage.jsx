import React from 'react';
import { Link } from 'react-router-dom';
import UserFooter from '../../Components/User/UserHomeFooter';
import UserNavbar from '../../Components/User/UserHomeNavbar';

const HomePage = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-20">
        <UserNavbar />
      </div>

      {/* Page Content */}
      <main className="pt-16 flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-lime-500 text-white py-20 px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-black">ZONEOUT</span>
          </h1>
          <p className="text-xl mb-6">Book your favorite turf with ease. Anywhere. Anytime.</p>
          <Link
            to="/explore"
            className="bg-white text-green-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Explore Turfs
          </Link>
        </section>

        {/* Search Section */}
        <section className="bg-white py-10 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Find a Turf Near You</h2>
          <input
            type="text"
            placeholder="Search by city, area or turf name..."
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </section>

        {/* About Section */}
        <section className="py-16 px-6 bg-gray-100 text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Choose ZONEOUT?</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            ZONEOUT makes it easier than ever to discover, compare, and book sports turfs for football, cricket, and other games.
            We offer real-time availability, transparent pricing, and instant confirmation.
          </p>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-10">What Players Say</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Aarav", feedback: "ZONEOUT made turf booking super simple. Loved the smooth UI!" },
              { name: "Ishaan", feedback: "Best platform for turf games with friends. Real-time slots rock!" },
              { name: "Meera", feedback: "No more calling turfs for availability. ZONEOUT saves so much time." },
            ].map(({ name, feedback }) => (
              <div key={name} className="bg-green-50 p-6 rounded-xl shadow">
                <p className="text-gray-700 italic">“{feedback}”</p>
                <h4 className="mt-4 font-bold text-green-700">{name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <UserFooter />
      </main>
    </div>
  );
};

export default HomePage;
