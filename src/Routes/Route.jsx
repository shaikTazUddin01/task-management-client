import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayOut from '../layout/mainLayOut/mainlayout';
import Login from '../pages/Login/Login';
import SignUP from '../pages/SignUp/SignUP';
import DashBoardLayOut from '../layout/mainLayOut/DashBoardLayOut';
import PrivateRoute from './privateRoute';

import CreateTask from '../pages/DashBoard/CreateTask/CreateTask';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUP></SignUP>
      },

    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoardLayOut></DashBoardLayOut></PrivateRoute>,
    children: [
      {
        path: 'createtask',
        element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
      }
    ]

  }
])


export default Route;