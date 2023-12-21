import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const DashBoardLayOut = () => {
  const navitem = <>
    <li><NavLink to={'/dashboard/createtask'}>Create todo</NavLink></li>
  </>
  return (

    <div className='flex  '>

      <div className='hidden lg:flex bg-black min-h-screen w-[20%]'>
        <ul className='menu uppercase text-white '>
          {navitem}
        </ul>
      </div>
      <div className='w-[80%]'>
        <Outlet></Outlet>
      </div>


    </div>

  );
};

export default DashBoardLayOut;