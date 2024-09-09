import React, { useState } from 'react';
import Chitkaralogo from '/Chitkaralogo.jpeg'; // Adjust the path if necessary
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [RollNo, setRollNo] = useState('');
  const [FatherName, setFatherName] = useState('');
  const [MotherName, setMotherName] = useState('');
  const [Gender, setGender] = useState('');
  const [Dob, setDob] = useState('');
  const [Category, setCategory] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser = {
      name,
      email,
      password,
      RollNo,
      FatherName,
      MotherName,
      Gender,
      Dob,
      Category,
      phoneNo,
    };

    axios.post("http://localhost:3001/register", newUser)
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 mt-12 mb-12 p-8 rounded-lg shadow-lg max-w-md w-full text-gray-200">
        <div className="flex justify-center mb-6">
          <img src={Chitkaralogo} alt="Chitkara University Logo" className="w-24 h-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Create Your Account</h2>
        <form onSubmit={handleSignUp}>
          {/* Existing fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 font-medium mb-2">Full Name</label>
            <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 font-medium mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-400 font-medium mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          {/* New fields */}
          <div className="mb-4">
            <label htmlFor="RollNo" className="block text-gray-400 font-medium mb-2">Roll No</label>
            <input type="text" id="RollNo" name='RollNo' className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={RollNo} onChange={(e) => setRollNo(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="FatherName" className="block text-gray-400 font-medium mb-2">Father's Name</label>
            <input type="text" id="FatherName" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={FatherName} onChange={(e) => setFatherName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="MotherName" className="block text-gray-400 font-medium mb-2">Mother's Name</label>
            <input type="text" id="MotherName" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={MotherName} onChange={(e) => setMotherName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="Gender" className="block text-gray-400 font-medium mb-2">Gender</label>
            <input type="text" id="Gender" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={Gender} onChange={(e) => setGender(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="Dob" className="block text-gray-400 font-medium mb-2">Date of Birth</label>
            <input type="text" id="Dob" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={Dob} onChange={(e) => setDob(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="Category" className="block text-gray-400 font-medium mb-2">Category</label>
            <input type="text" id="Category" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={Category} onChange={(e) => setCategory(e.target.value)} required />
          </div>
          <div className="mb-6">
            <label htmlFor="phoneNo" className="block text-gray-400 font-medium mb-2">Phone Number</label>
            <input type="text" id="phoneNo" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
          </div>
          <button type="submit" className="w-full bg-[#EB1C24] text-white py-2 rounded-lg font-semibold hover:bg-[#c71522] transition duration-300">
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-400">Already have an account? <Link to="/login" className="text-[#EB1C24] hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
