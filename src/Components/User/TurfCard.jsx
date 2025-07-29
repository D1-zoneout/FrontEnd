import { Link } from "react-router-dom";

export default function TurfCard({ turf, index }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-80 hover:scale-105 transition">
      <img
        src={turf.image}
        alt={turf.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-indigo-600">{turf.name}</h2>
        <p className="text-sm text-gray-600">{turf.location}</p>
        <p className="mt-1 text-sm text-gray-700">Type: {turf.type}</p>
        <p className="text-indigo-500 font-bold mt-2">₹{turf.rate}/hr</p>

       
        <Link
          to={`/user/turf/${index + 1}`}
          className="mt-3 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
