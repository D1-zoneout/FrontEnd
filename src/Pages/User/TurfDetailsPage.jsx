import { useParams, Link } from 'react-router-dom';

const sampleTurfs = {
  1: { name: 'Green Field Turf', description: 'Spacious football ground with floodlights.', rate: 500 },
  2: { name: 'City Sports Arena', description: 'Large cricket pitch with seating.', rate: 750 },
  3: { name: 'Elite Play Zone', description: 'Indoor futsal court with premium flooring.', rate: 600 }
};

export default function TurfDetailsPage() {
  const { id } = useParams();
  const turf = sampleTurfs[id] || { name: 'Unknown Turf', description: 'Details unavailable', rate: 0 };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h1 className="text-3xl text-indigo-500 font-bold mb-4">{turf.name}</h1>
        <p className="text-gray-700 mb-2">{turf.description}</p>
        <p className="text-indigo-500 font-bold mb-4">Rate: ₹{turf.rate}/hr</p>
        <Link to={`/book/${id}`} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg shadow">Book Now</Link>
      </div>
    </div>
  );
}
