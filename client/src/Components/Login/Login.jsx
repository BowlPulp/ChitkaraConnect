// Login.jsx
import React, { useState } from 'react';
import Chitkaralogo from '/Chitkaralogo.jpeg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password); // Debugging
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log('Server response:', result.data); // Debugging
        if (result.data.success) {
          const { rollNo } = result.data;
          navigate(`/student/${rollNo}/home`);
        } else {
          alert(result.data.message); // Show the error to the user
        }
      })
      .catch(error => {
        console.error('Login error:', error); // Log the error
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-gray-200">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img src={Chitkaralogo} alt="Chitkara University Logo" className="w-24 h-auto rounded-lg" />
        </div>
        
        {/* Login Form */}
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name='password'
              className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#EB1C24] text-white py-2 rounded-lg font-semibold hover:bg-[#c71522] transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Don't have an account? <Link to="/register" href="#" className="text-[#EB1C24] hover:underline">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
