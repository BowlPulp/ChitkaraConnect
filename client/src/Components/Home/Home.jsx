import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Don't forget to import axios

function Home() {
  const [posts, setPosts] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/adminposts/');
        setPosts(response.data); // Assuming response.data is the array of posts
      } catch (error) {
        console.error('Failed to fetch posts data', error);
      }
    };

    const fetchEventsData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/events'); // Updated endpoint
        console.log('Events data:', response.data); // Log the events data
        setEvents(response.data);
      } catch (error) {
        console.error('Failed to fetch events data', error);
      }
    };

    fetchPostsData();
    fetchEventsData();
  }, []);

  if (!posts || !events) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-green-400 mb-6">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-green-400 mb-2">{post.heading}</h2>
              <p className="text-gray-400 mb-1">
                <strong>Date of Creation:</strong> {new Date(post.dateOfCreation).toLocaleDateString()}
              </p>
              <p className="text-gray-400 mb-1">
                <strong>Date of Event:</strong> {new Date(post.dateOfEvent).toLocaleDateString()}
              </p>
              <p className="mt-3 text-gray-300">{post.description}</p>
            </div>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-blue-400 mt-12 mb-6">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">{event.title}</h2>
              <p className="text-gray-400 mb-1">
                <strong>Venue:</strong> {event.venue}
              </p>
              <p className="text-gray-400 mb-1">
                <strong>Date of Event:</strong> {new Date(event.dateOfEvent).toLocaleDateString()}
              </p>
              <p className="text-gray-400 mb-1">
                <strong>Time:</strong> {event.timings}
              </p>
              <p className="text-gray-400 mb-1">
                <strong>Students Allowed:</strong> {event.studentsAllowed}
              </p>
              <p className="mt-3 text-gray-300">{event.description}</p>
              {event.imageUrl && (
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="mt-4 w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
