
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayOut from '../layout/mainLayOut/mainlayout';
import Login from '../pages/Login/Login';
import SignUP from '../pages/SignUp/SignUP';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/signup',
            element:<SignUP></SignUP>
          }
        ]
    }
  ])


export default Route;