// ParentComponent.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <div>
          <p>User is logged in: {isLoggedIn ? 'Yes' : 'No'}</p>
          <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default ParentComponent;
