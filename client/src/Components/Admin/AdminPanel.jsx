import React from 'react';
import { MdAnnouncement, MdEvent, MdList, MdPostAdd, MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import NavBar from '../Navigation/Navbar';

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-gray-200 p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden">
        
        {/* Sidebar */}
        <div className="lg:w-1/3 bg-gray-800 p-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-6">Admin Panel</h2>
          
          {/* Navigation Buttons */}
          <Link 
            to="/admin"
            className="flex items-center justify-center w-full py-2 text-sm font-semibold text-gray-900 bg-blue-500 rounded-lg hover:bg-blue-600 mb-4"
          >
            <MdAnnouncement className="mr-2" />
            Post Announcement
          </Link>
          
          <Link 
            to="/postevent"
            className="flex items-center justify-center w-full py-2 text-sm font-semibold text-gray-900 bg-green-500 rounded-lg hover:bg-green-600 mb-4"
          >
            <MdEvent className="mr-2" />
            Post Event
          </Link>
          
          <Link 
            to="/admin/students-list"
            className="flex items-center justify-center w-full py-2 text-sm font-semibold text-gray-900 bg-yellow-500 rounded-lg hover:bg-yellow-600 mb-4"
          >
            <MdList className="mr-2" />
            Students List - Coming soon
          </Link>
          
          <Link 
  to="/admin/delete-post"
  className="flex items-center justify-center w-full py-2 text-sm font-semibold text-gray-900 bg-red-500 rounded-lg hover:bg-red-600"
>
  <MdPostAdd className="mr-2" />
  Delete Post
</Link>

        </div>

        {/* Main Content Area */}
        <div className="lg:w-2/3 bg-gray-800 p-6">
          <h1 className="text-3xl font-semibold mb-6 text-center lg:text-left">Welcome, Admin</h1>
          <p className="text-gray-400">
            Use the buttons on the left to manage announcements, events, and student information. 
            This panel is designed to provide easy access to the tools you need to effectively manage the college’s activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
