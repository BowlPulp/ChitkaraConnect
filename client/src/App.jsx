import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Components/Profile/Profile'
import NavBar from './Components/Navigation/Navbar'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';


function App() {
  const { rollno } = useParams();
  const [student, setStudent] = useState(null);
  const { employeeid } = useParams(); // Access the route parameter

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
    <>
      
      <NavBar student={student} />
      <Outlet/>
      <Footer/>
    </>
  )
}


export default App
