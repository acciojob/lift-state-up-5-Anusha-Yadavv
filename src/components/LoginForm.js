// LoginForm.js
import React, { useState } from 'react';

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check login credentials (skipping for simplicity)
    // Assuming login is successful for any non-empty username/password
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(); // Call parent function to update isLoggedIn state
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are already logged in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
