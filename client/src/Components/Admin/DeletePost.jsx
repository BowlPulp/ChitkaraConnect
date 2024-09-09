import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeletePost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all posts when the component is mounted
    axios.get('http://localhost:3001/admin/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (postId) => {
    axios.delete(`http://localhost:3001/admin/posts/${postId}`)
      .then(() => {
        // Remove the deleted post from the state
        setPosts(posts.filter(post => post._id !== postId));
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-gray-200 p-4">
      <h2 className="text-3xl font-semibold mb-6">Delete Post</h2>
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul className="w-full max-w-4xl">
          {posts.map(post => (
            <li key={post._id} className="bg-gray-800 p-4 mb-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="mb-4">{post.content}</p>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeletePost;
