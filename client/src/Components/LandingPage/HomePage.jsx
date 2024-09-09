import React from 'react';
import { Link } from 'react-router-dom';
import Chitkaralogo from '/Chitkaralogo.jpeg'; // Adjust path as needed

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl w-full text-gray-200 flex flex-col items-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={Chitkaralogo} alt="Chitkara University Logo" className="w-32 h-auto rounded-lg" />
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl font-bold mb-4 text-gray-200 text-center">Welcome to Chitkara Connect!</h1>
        <p className="text-gray-400 mb-8 text-center">Connect with students and teachers seamlessly. Choose an option below to get started.</p>

        {/* Login and Register Options */}
        <div className="flex w-full">
          {/* Left Side */}
          <div className="w-1/2 pr-4 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Student Portal</h2>
            <div className="flex flex-col space-y-4">
              <Link to="/login" className="w-full bg-[#EB1C24] text-white py-2 rounded-lg font-semibold hover:bg-[#c71522] transition duration-300 text-center block">
                Login (Student)
              </Link>
              <Link to="/register" className="w-full px-2 bg-gray-700 text-gray-200 py-2 rounded-lg font-semibold hover:bg-gray-600 transition duration-300 text-center block">
                Register (Student)
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-1/2 pl-4 border-l border-gray-600 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Teacher Portal</h2>
            <div className="flex flex-col space-y-4">
              <Link to="/login-teacher" className="w-full bg-[#EB1C24] text-white py-2 rounded-lg font-semibold hover:bg-[#c71522] transition duration-300 text-center block">
                Login (Teacher)
              </Link>
              <Link to="/register-teacher" className="w-full px-2 bg-gray-700 text-gray-200 py-2 rounded-lg font-semibold hover:bg-gray-600 transition duration-300 text-center block">
                Register (Teacher)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
