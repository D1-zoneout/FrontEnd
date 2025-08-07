export default function MyBookings() {
  const bookings = [
    { id: 1, turf: "City Turf", date: "2025-07-30", time: "5-6 PM", status: "Confirmed" },
    { id: 2, turf: "Greenfield Arena", date: "2025-08-01", time: "7-8 PM", status: "Pending" },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-500 mb-4">My Bookings</h1>
      <ul className="space-y-4">
        {bookings.map((b) => (
          <li key={b.id} className="p-4 bg-white rounded shadow">
            <p className="font-semibold">{b.turf}</p>
            <p>{b.date} at {b.time}</p>
            <p className="text-sm text-gray-600">Status: {b.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}
