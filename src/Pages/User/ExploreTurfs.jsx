import { Link } from 'react-router-dom';

const sampleTurfs = [
  { id: 1, name: 'Green Field Turf', location: 'Downtown', rate: 500, type: 'Football' },
  { id: 2, name: 'City Sports Arena', location: 'Uptown', rate: 750, type: 'Cricket' },
  { id: 3, name: 'Elite Play Zone', location: 'Midtown', rate: 600, type: 'Futsal' }
];

export default function ExploreTurfs() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl text-indigo-500 font-bold mb-6">Explore Turfs</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {sampleTurfs.map(turf => (
          <div key={turf.id} className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">{turf.name}</h2>
            <p className="text-gray-500">Location: {turf.location}</p>
            <p className="text-gray-500">Type: {turf.type}</p>
            <p className="text-indigo-500 font-bold">Rate: ₹{turf.rate}/hr</p>
            <Link to={`/user/turf-details/${turf.id}`} className="text-indigo-500 hover:underline mt-2 block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
