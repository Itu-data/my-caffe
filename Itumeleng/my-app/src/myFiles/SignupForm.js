import React, { useState } from 'react';

const SignupForm = ({ onSignup, toggleForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(username, password);
    setUsername(''); // Clear input after signing up
    setPassword('');
  };

  return (
    <div id="signup-form" className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={toggleForm} className="toggle-form">
        Already have an account? Login
      </button>
    </div>
  );
};

export default SignupForm;
