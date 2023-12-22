import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayOut from '../layout/mainLayOut/mainlayout';
import Login from '../pages/Login/Login';
import SignUP from '../pages/SignUp/SignUP';
import DashBoardLayOut from '../layout/mainLayOut/DashBoardLayOut';
import PrivateRoute from './privateRoute';

import CreateTask from '../pages/DashBoard/CreateTask/CreateTask';
import ShowAllTask from '../pages/DashBoard/ShowAllTask/ShowAllTask';
import MyTask from '../pages/DashBoard/MyTask/MyTask';
import Dashboard from '../component/DashBoard/Dashboard';

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
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: 'createtask',
        element: <PrivateRoute><CreateTask></CreateTask></PrivateRoute>
      },
      {
        path:'alltask',
        element:<PrivateRoute><ShowAllTask></ShowAllTask></PrivateRoute>
      }
      ,
      {
        path:'mytask',
        element:<PrivateRoute><MyTask></MyTask></PrivateRoute>
      }
    ]

  }
])


export default Route;