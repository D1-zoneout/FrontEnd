export default function CancelBooking() {
  const booking = { id: 201, turf: "City Turf", date: "2025-07-30", time: "5-6 PM", status: "Confirmed" };
  const handleCancel = () => alert(`Booking #${booking.id} canceled`);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-500 mb-4">Cancel Booking</h1>
      <div className="bg-white p-4 rounded shadow">
        <p className="font-semibold">{booking.turf}</p>
        <p>{booking.date} at {booking.time}</p>
        <button onClick={handleCancel} className="mt-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Cancel Booking</button>
      </div>
    </div>
  );
}
