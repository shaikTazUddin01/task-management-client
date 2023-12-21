
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayOut from '../layout/mainLayOut/mainlayout';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          }
        ]
    }
  ])


export default Route;