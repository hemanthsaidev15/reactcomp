// src/AuthService.js
export const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the user already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      return { success: false, message: 'User already exists' };
    }
  
    // Save the new user to local storage
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
  
    return { success: true, message: 'Signup successful' };
  };
  
  export const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the user exists
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  };
  