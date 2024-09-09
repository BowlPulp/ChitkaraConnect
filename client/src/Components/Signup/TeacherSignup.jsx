import React, { useState } from 'react';
import Chitkaralogo from '/Chitkaralogo.jpeg'; // Adjust the path if necessary
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TeacherSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [department, setDepartment] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newTeacher = {
      name,
      email,
      password,
      employeeId,
      department,
      qualification,
      experience,
      phoneNo,
    };

    axios.post("http://localhost:3001/register-teacher", newTeacher)
      .then(result => {
        console.log(result);
        navigate('/login-teacher');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 mt-12 mb-12 p-8 rounded-lg shadow-lg max-w-md w-full text-gray-200">
        <div className="flex justify-center mb-6">
          <img src={Chitkaralogo} alt="Chitkara University Logo" className="w-24 h-auto" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Teacher Registration</h2>
        <form onSubmit={handleSignUp}>
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
          <div className="mb-4">
            <label htmlFor="employeeId" className="block text-gray-400 font-medium mb-2">Employee ID</label>
            <input type="text" id="employeeId" name='employeeId' className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block text-gray-400 font-medium mb-2">Department</label>
            <input type="text" id="department" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={department} onChange={(e) => setDepartment(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="qualification" className="block text-gray-400 font-medium mb-2">Qualification</label>
            <input type="text" id="qualification" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={qualification} onChange={(e) => setQualification(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-400 font-medium mb-2">Experience (in years)</label>
            <input type="text" id="experience" className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300" value={experience} onChange={(e) => setExperience(e.target.value)} required />
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
          <p className="text-gray-400">Already have an account? <Link to="/adminpanel" className="text-[#EB1C24] hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default TeacherSignUp;
