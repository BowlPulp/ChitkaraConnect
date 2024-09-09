import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProfile = () => {
  const { rollno } = useParams(); // Use rollno instead of RollNo
  const [userData, setUserData] = useState({
    Name: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    FatherName: '',
    MotherName: '',
    Gender: '',
    Dob: '',
    Category: '',
    PhoneNo: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing user data when the component mounts
    axios.get(`http://localhost:3001/student/${rollno}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => console.log(error));
  }, [rollno]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.Password !== userData.ConfirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Exclude _id and __v fields from the data to be sent
    const { _id, __v, ...dataToUpdate } = userData;

    axios.put(`http://localhost:3001/student/${rollno}`, dataToUpdate)
      .then(response => {
        console.log(response);
        navigate(`/student/${rollno}/profile`); // Navigate to the profile page
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Edit Your Information</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(userData).map((key) => (
            key !== 'ConfirmPassword' && key !== '_id' && key !== '__v' && (
              <div className="mb-4" key={key}>
                <label htmlFor={key} className="block text-gray-400 font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</label>
                <input
                  type={key === 'Password' || key === 'ConfirmPassword' ? 'password' : 'text'}
                  id={key}
                  name={key}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:border-[#EB1C24] bg-gray-700 text-gray-300"
                  value={userData[key]}
                  onChange={handleChange}
                  required
                />
              </div>
            )
          ))}
          <button
            type="submit"
            className="w-full bg-[#EB1C24] text-white py-2 rounded-lg font-semibold hover:bg-[#c71522] transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
