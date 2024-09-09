import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Login from './Components/Login/Login.jsx';
import SignUp from './Components/Signup/Signup.jsx';
import EditProfile from './Components/Profile/EditProfile.jsx';
import Admin from './Components/Admin/Admin.jsx';
import AdminPanel from './Components/Admin/AdminPanel.jsx';
import PostEvent from './Components/Admin/PostEvent.jsx'; 
import HomePage from './Components/LandingPage/HomePage.jsx';
import TeacherSignUp from './Components/Signup/TeacherSignup.jsx';
import TeacherLogin from './Components/Login/TeacherLogin.jsx';
import DeletePost from './Components/Admin/DeletePost.jsx';

const router = createBrowserRouter([
  {
    path: '/', // Base path
    element: <HomePage/>,
  },
  {
    path: '/register', // Student Register
    element: <SignUp/>,
  },
  {
    path: '/login', // Student Login
    element: <Login/>,
  },
  {
    path: '/register-teacher', // Teacher Register
    element: <TeacherSignUp/>,
  },
  {
    path: '/login-teacher', // Teacher Login
    element: <TeacherLogin/>,
  },
  {
    path: '/student/:rollno',
    element: <App/>,
    children: [
      {
        path: 'home', // Relative path
        element: <Home/>,
      },
      {
        path: 'profile', // Relative path
        element: <Profile/>,
      },
      {
        path: 'editprofile', // Relative path
        element: <EditProfile/>,
      }
    ],
  },
  {
    path: '/adminpanel', // Relative path
    element: <AdminPanel/>,
  },
  {
    path: '/admin', // Relative path
    element: <Admin/>,
  },
  {
    path: '/postevent', // Relative path
    element: <PostEvent/>,
  },
  {
    path: '/admin/delete-post', // Relative path
    element: <DeletePost/>,
  },

  // {
  //   path: '/teacher',
  //   element: <App/>,
  //   children: [
  //     {
  //       path: 'home', // Relative path
  //       element: <AdminPanel/>,
  //     },
  //     {
  //       path: 'admin', // Relative path
  //       element: <Admin/>,
  //     },
  //     {
  //       path: 'admin/post-event', // Relative path
  //       element: <PostEvent/>,
  //     },
  //     {
  //       path: 'dashboard', // Relative path
  //       element: <AdminPanel/>,
  //     }
  //   ],
  // },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
