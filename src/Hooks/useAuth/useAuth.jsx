import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const useAuth = () => {
    const context = useContext(AuthContext)
    return (
        context
    );
};

export default useAuth;