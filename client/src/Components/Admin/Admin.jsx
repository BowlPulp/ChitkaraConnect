import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [heading, setHeading] = useState("");
  const [dateOfCreation, setDateOfCreation] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      heading,
      dateOfCreation,
      dateOfEvent,
      description,
    };
    axios.post("http://localhost:3001/admin",{heading,dateOfCreation, dateOfEvent,description})
    .then(result =>{
      console.log(result)
      navigate ('/admin')
      })
      .catch(err => console.log(err))
    console.log("Post Created:", post);
    // Add logic to save the post
    alert("Post created successfully!");
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-[#EB1C22] mb-6">Create Post</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="heading">
            Heading
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="dateOfCreation">
            Date of Creation
          </label>
          <input
            type="date"
            id="dateOfCreation"
            name="dateOfCreation"
            value={dateOfCreation}
            onChange={(e) => setDateOfCreation(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="dateOfEvent">
            Date of Event
          </label>
          <input
            type="date"
            id="dateOfEvent"
            name="dateOfEvent"
            value={dateOfEvent}
            onChange={(e) => setDateOfEvent(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-[#EB1C24] text-gray-900 font-semibold rounded-lg hover:bg-[#EB1C22] transition duration-200"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default Admin;