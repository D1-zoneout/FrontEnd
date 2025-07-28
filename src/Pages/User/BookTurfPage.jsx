export default function BookTurfPage() {
  const handleBook = () => alert("Turf booked successfully!");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-500 mb-4">Book Turf</h1>
      <div className="bg-white p-4 rounded shadow">
        <p className="mb-2">Select your slot and confirm booking.</p>
        <button onClick={handleBook} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">Book Now</button>
      </div>
    </div>
  );
}
