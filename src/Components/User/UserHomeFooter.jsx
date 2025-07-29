// src/components/Footer.jsx
import React from 'react'

const UserFooter = () => {
  return (
    <footer className="bg-green-700 text-white py-6 text-center">
      <p>&copy; {new Date().getFullYear()} ZONEOUT. All rights reserved.</p>
      <p className="text-sm">Built with 💚 for sports lovers.</p>
    </footer>
  )
}

export default UserFooter
