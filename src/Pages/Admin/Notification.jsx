import React, { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react'

const icons = {
  success: <CheckCircle className="text-green-600 w-5 h-5" />,
  error: <XCircle className="text-red-600 w-5 h-5" />,
  info: <Info className="text-blue-600 w-5 h-5" />,
  warning: <AlertTriangle className="text-yellow-500 w-5 h-5" />,
}

const bgColors = {
  success: 'bg-green-50 border-green-600',
  error: 'bg-red-50 border-red-600',
  info: 'bg-blue-50 border-blue-600',
  warning: 'bg-yellow-50 border-yellow-500',
}

const NotificationCard = ({ type = 'info', message, onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div className={`flex items-center justify-between px-4 py-3 border-l-4 rounded-lg shadow ${bgColors[type]} mb-2`}>
      <div className="flex items-center gap-2">
        {icons[type]}
        <span className="text-sm text-gray-800">{message}</span>
      </div>
      <button onClick={onClose}>
        <X className="w-4 h-4 text-gray-500 hover:text-gray-800" />
      </button>
    </div>
  )
}

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Booking confirmed for Turf A at 6:00 PM' },
    { id: 2, type: 'info', message: 'New turf added by provider Shri Sports' },
    { id: 3, type: 'warning', message: 'Payment for Booking #1023 is pending' },
    { id: 4, type: 'error', message: 'Failed to process refund for cancelled booking' },
  ])

  const handleClose = (id) => {
    setNotifications(notifications.filter((note) => note.id !== id))
  }

  return (
    <div className="max-w-lg mx-auto mt-6">
      {notifications.map((note) => (
        <NotificationCard
          key={note.id}
          type={note.type}
          message={note.message}
          onClose={() => handleClose(note.id)}
        />
      ))}
    </div>
  )
}

export default Notification
