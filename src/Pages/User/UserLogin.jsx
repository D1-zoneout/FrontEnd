import React from 'react'

function UserLogin() {
  return (
    <div>
      <h2>User Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default UserLogin
