import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ManageSlots() {
  const navigate = useNavigate();

  const [slots, setSlots] = useState([
    { id: 1, start: '06:00 AM', end: '07:00 AM', price: 500 },
    { id: 2, start: '07:00 AM', end: '08:00 AM', price: 600 },
  ]);

  const [newSlot, setNewSlot] = useState({
    start: '',
    end: '',
    price: '',
  });

  const handleChange = (e) => {
    setNewSlot({ ...newSlot, [e.target.name]: e.target.value });
  };

  const addSlot = () => {
    if (newSlot.start && newSlot.end && newSlot.price) {
      const newId = Date.now();
      setSlots([...slots, { ...newSlot, id: newId }]);
      setNewSlot({ start: '', end: '', price: '' });
    }
  };

  const deleteSlot = (id) => {
    setSlots(slots.filter((slot) => slot.id !== id));
  };

  return (
    <>
      <ProviderNavbar />
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate('/provider/dashboard')}
        className="mb-6 text-sm text-indigo-600 hover:underline"
      >
        ← Back to Dashboard
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-center">Manage Slots for Turf Name</h2>

      {/* Add Slot Form */}
      <div className="bg-gray-50 p-6 rounded-xl shadow mb-8 max-w-3xl mx-auto">
        <h3 className="text-lg font-medium mb-4">Add New Slot</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="time"
            name="start"
            value={newSlot.start}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg shadow-sm"
            placeholder="Start Time"
          />
          <input
            type="time"
            name="end"
            value={newSlot.end}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg shadow-sm"
            placeholder="End Time"
          />
          <input
            type="number"
            name="price"
            value={newSlot.price}
            onChange={handleChange}
            className="border px-4 py-2 rounded-lg shadow-sm"
            placeholder="Price"
          />
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={addSlot}
            className="bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-700"
          >
            Add Slot
          </button>
        </div>
      </div>

      {/* Existing Slots List */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-lg font-medium mb-4">Available Slots</h3>
        <table className="w-full table-auto border rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Start</th>
              <th className="px-4 py-2 text-left">End</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot.id} className="border-t">
                <td className="px-4 py-2">{slot.start}</td>
                <td className="px-4 py-2">{slot.end}</td>
                <td className="px-4 py-2">₹{slot.price}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => deleteSlot(slot.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {slots.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No slots added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default ManageSlots;
