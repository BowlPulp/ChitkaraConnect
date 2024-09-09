import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PostEvent = () => {
  const [title, setTitle] = useState("");
  const [venue, setVenue] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState("");
  const [time, setTime] = useState("");
  const [studentsAllowed, setStudentsAllowed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventData = {
      title,
      venue,
      dateOfEvent,
      timings: time,
      studentsAllowed,
      imageUrl,
      description,
    };

    axios.post("http://localhost:3001/admin/post-event", eventData)
      .then(result => {
        console.log(result);
        alert("Event created successfully!");
        navigate('/admin');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-[#EB1C22] mb-6">Create Event</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="title">
            Event Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="venue">
            Venue
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={dateOfEvent}
            onChange={(e) => setDateOfEvent(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="time">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="studentsAllowed">
            Students Allowed
          </label>
          <input
            type="number"
            id="studentsAllowed"
            name="studentsAllowed"
            value={studentsAllowed}
            onChange={(e) => setStudentsAllowed(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#EB1C22]"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="imageUrl">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
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
          Create Event
        </button>
      </form>
    </div>
  );
};

export default PostEvent;
