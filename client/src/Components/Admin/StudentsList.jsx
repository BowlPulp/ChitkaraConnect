import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/students');
        setStudents(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch students data');
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div className="text-center text-gray-200">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-green-400 mb-6">Students List</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-gray-700">
            <thead>
              <tr className="text-left border-b border-gray-600">
                <th className="p-4">Roll No</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone No</th>
                <th className="p-4">Gender</th>
                <th className="p-4">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.RollNo} className="border-b border-gray-600">
                  <td className="p-4">{student.RollNo}</td>
                  <td className="p-4">{student.Name}</td>
                  <td className="p-4">{student.Email}</td>
                  <td className="p-4">{student.PhoneNo}</td>
                  <td className="p-4">{student.Gender}</td>
                  <td className="p-4">{new Date(student.Dob).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
