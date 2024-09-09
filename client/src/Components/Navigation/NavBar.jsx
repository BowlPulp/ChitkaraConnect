import React, { useState } from "react";
import Chitakaralogo from "/Chitkaralogo.jpeg";
import { Link } from "react-router-dom";
import profile from "/profile.png";

const NavBar = ({ student }) => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-gray-200 p-4 shadow-lg border-b border-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Text */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-2">
            <img className="w-12 h-12 md:w-16 md:h-16 rounded-lg" src={Chitakaralogo} alt="Logo" />
            <span className="text-xl font-bold text-gray-200 px-2">Chitkara Connect</span>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center space-x-8">
          <Link to="home" className="hover:text-[#EB1C24]">Home</Link>
          <a href="#" className="hover:text-[#EB1C24]">Performance</a>
          <a href="#" className="hover:text-[#EB1C24]">Attendance</a>
          <a href="#" className="hover:text-[#EB1C24]">Upcoming Events</a>
          <a href="#" className="hover:text-[#EB1C24]">Contact Mentor</a>
          <a href="#" className="hover:text-[#EB1C24]">Help</a>
        </div>

        {/* Profile and Mobile Menu Button */}
        <div className="relative flex items-center space-x-4">
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <span className="text-2xl text-[#EB1C24]">☰</span>
            </button>
          </div>
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <img
                className="w-8 h-8 rounded-full border-2 bg-slate-500 border-gray-600"
                src={profile}
                alt="Profile"
              />
              <span className="hidden md:inline-block font-medium">{student.name}</span>
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-auto bg-gray-800 rounded-lg shadow-lg py-2">
                <div className="px-4 py-2 text-sm">
                  <p className="font-semibold">{student.name}</p>
                  <p className="text-gray-400">{student.email}</p>
                  <p>Roll No: {student.RollNo}</p>
                </div>
                <div className="border-t border-gray-700"></div>
                <Link to={`/student/${student.RollNo}/profile`} className="block px-4 py-2 text-sm hover:bg-gray-700">
                  View Profile
                </Link>
                <Link to="/" className="block px-4 py-2 text-sm hover:bg-gray-700">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          <a href="#" className="block hover:text-[#EB1C24]">Home</a>
          <a href="#" className="block hover:text-[#EB1C24]">Performance</a>
          <a href="#" className="block hover:text-[#EB1C24]">Attendance</a>
          <a href="#" className="block hover:text-[#EB1C24]">Upcoming Events</a>
          <a href="#" className="block hover:text-[#EB1C24]">Contact Mentor</a>
          <a href="#" className="block hover:text-[#EB1C24]">Help</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
