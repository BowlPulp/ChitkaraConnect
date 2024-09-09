import React, { useState } from 'react';
import Chitkaralogo from '/Chitkaralogo.jpeg'; // Adjust the path if necessary
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    axios.post("http://localhost:3001/login-teacher", loginData)
      .then(result => {
        console.log(result.data);
        if (result.data.success) {
          // Redirect to the specific teacher's home page
          navigate(`/teacher/${result.data.employeeId}/home`);
        } else {
          alert('Invalid email or password!');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 mt-12 mb-12 p-8 rounded-lg shadow-lg max-w-md w-full text-gray-200">
        <div className="flex justify-center mb-6">
          <img src={Chitkaralogo} alt="Chitkara University Logo" className="w-24 h-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Teacher Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-400 font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="w-full bg-[#EB1C24] text-white py-2 rounded-lg font-semibold hover:bg-[#c71522] transition duration-300">
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Don't have an account? <Link to="/register-teacher" className="text-[#EB1C24] hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
