import React ,{useState,useEffect} from "react";
import { FaUserEdit } from "react-icons/fa";
import profile from "/profile.png";
import { Link } from 'react-router-dom';
import {
  MdEmail,
  MdPhone,
  MdSchool,
  MdPerson,
  MdDateRange,
  MdGroup,
  MdClass,
} from "react-icons/md";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { rollno } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/student/${rollno}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Failed to fetch student data', error);
      }
    };

    fetchStudentData();
  }, [rollno]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-[90%] flex flex-col justify-center items-center bg-gray-900 text-gray-200 p-8">
      {/* Responsive Container */}
      <div className="w-full max-w-4xl flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}
        <div className="lg:w-1/3 bg-gray-800 p-6 flex flex-col items-center">
          <img
            className="w-32 h-32 bg-slate-500 rounded-full mb-4 border-4 border-gray-700"
            src={profile}
            alt="Profile"
          />
          <h2 className="text-2xl font-semibold">{student.name}</h2>
          <p className="text-gray-400 mb-4">CSE</p>
          <Link to={`/student/${rollno}/editprofile`} className="flex items-center justify-center w-full py-2 text-sm font-semibold text-gray-900 bg-green-400 rounded-lg hover:bg-green-500">
            <FaUserEdit className="mr-2" />
            Edit Profile
          </Link>
        </div>

        {/* Profile Details */}
        <div className="lg:w-2/3 bg-gray-800 p-6">
          <h1 className="text-3xl font-semibold mb-6 text-center lg:text-left">Profile Details</h1>
          <div className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <MdEmail className="text-2xl text-green-400 mr-3" />
                  <span>{student.email}</span>
                </div>
                <div className="flex items-center">
                  <MdPhone className="text-2xl text-green-400 mr-3" />
                  <span>+91-{student.phoneNo}</span>
                </div>
                <div className="flex items-center">
                  <MdPerson className="text-2xl text-green-400 mr-3" />
                  <span>Gender: {student.Gender}</span>
                </div>
                <div className="flex items-center">
                  <MdDateRange className="text-2xl text-green-400 mr-3" />
                  <span>DoB: {student.Dob}</span>
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-4">Academic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <MdSchool className="text-2xl text-green-400 mr-3" />
                  <span>CSE</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">RollNo:</span>
                  <span className="ml-2">{student.RollNo}</span>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-medium mb-4">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <MdPerson className="text-2xl text-green-400 mr-3" />
                  <span>Fathers Name: {student.FatherName}</span>
                </div>
                <div className="flex items-center">
                  <MdPerson className="text-2xl text-green-400 mr-3" />
                  <span>Mothers Name: {student.MotherName}</span>
                </div>
                <div className="flex items-center">
                  <MdGroup className="text-2xl text-green-400 mr-3" />
                  <span>Category: {student.Category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
