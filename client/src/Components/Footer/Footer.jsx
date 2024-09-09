import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 border-t border-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Contact Information */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Email: <a href="mailto:contact@chitkara.edu.in" className="text-[#EB1C24]">contact@chitkara.edu.in</a></p>
          <p>Phone: +1 234 567 890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#EB1C24]">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#EB1C24]">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#EB1C24]">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#EB1C24]">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#EB1C24]">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm">© 2024 Chitkara Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
