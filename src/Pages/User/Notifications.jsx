import React, { useState, useEffect } from "react";
import { Bell, CheckCircle2, AlertCircle, CalendarCheck, CreditCard } from "lucide-react";

const dummyNotifications = [
  {
    id: 1,
    type: "Booking",
    message: "Your booking at Star Turf is confirmed for 25th July, 6 PM.",
    date: "2025-07-22",
    read: false,
  },
  {
    id: 2,
    type: "Payment",
    message: "Payment of ₹800 was successfully processed via UPI.",
    date: "2025-07-20",
    read: true,
  },
  {
    id: 3,
    type: "Info",
    message: "Maintenance scheduled at Green Arena Turf on 27th July.",
    date: "2025-07-19",
    read: false,
  },
];

const iconMap = {
  Booking: <CalendarCheck className="text-indigo-600" />,
  Payment: <CreditCard className="text-green-600" />,
  Info: <AlertCircle className="text-yellow-600" />,
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => setNotifications(dummyNotifications), 500);
  }, []);

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <Bell className="w-6 h-6 text-indigo-500" />
          <h1 className="text-3xl font-bold">Notifications</h1>
        </div>

        {notifications.length === 0 ? (
          <div className="text-gray-500 text-center mt-20">
            No notifications found.
          </div>
        ) : (
          <ul className="space-y-4">
            {notifications.map((note) => (
              <li
                key={note.id}
                className={`p-5 rounded-2xl shadow flex items-start gap-4 transition hover:shadow-md ${
                  note.read ? "bg-gray-50" : "bg-indigo-50"
                }`}
              >
                <div className="mt-1">
                  {iconMap[note.type] || <AlertCircle className="text-gray-500" />}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{note.message}</p>
                  <p className="text-sm text-gray-500 mt-1">{note.date}</p>
                </div>
                <button
                  onClick={() => toggleRead(note.id)}
                  className={`px-3 py-1 text-sm rounded-xl ${
                    note.read
                      ? "bg-gray-200 text-gray-600"
                      : "bg-indigo-600 text-white"
                  } hover:opacity-90`}
                >
                  {note.read ? "Mark as Unread" : "Mark as Read"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;
