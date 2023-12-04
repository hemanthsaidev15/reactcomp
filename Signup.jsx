// src/components/Signup.js
import React, { useState } from 'react';
import { signup } from '../AuthService';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const response = signup(email, password);

    if (response.success) {
      setMessage(response.message);
    } else {
      setMessage('Signup failed: ' + response.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Sign Up</button>
      <p>{message}</p>
    </div>
  );
};

export default Signup;
