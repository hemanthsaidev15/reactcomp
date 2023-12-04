// // src/components/Login.js
// import React, { useState } from 'react';
// import { login } from '../AuthService';

// const login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = () => {
//     const response = login(email, password);

//     if (response.success) {
//       setMessage(response.message);
//     } else {
//       setMessage('Login failed: ' + response.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       <label>Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       <button onClick={handleSubmit}>Login</button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default login;
