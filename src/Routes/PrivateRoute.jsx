import React from 'react';
import useAuth from '../Hooks/useAuth/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    // const navagate=useNavigate()
    const {user}=useAuth()

    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }

    return children
};

export default PrivateRoute;