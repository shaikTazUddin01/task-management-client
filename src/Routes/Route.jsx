
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    }
  ])


export default Route;