import React from 'react';
import Navbar from '../../component/shared/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;