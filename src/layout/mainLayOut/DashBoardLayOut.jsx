import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Dashboard from '../../component/DashBoard/Dashboard';
import useAuth from '../../Hooks/useAuth/useAuth';

const DashBoardLayOut = () => {
  const {user}=useAuth()
  const navitem = <>
    <li><NavLink to={'/dashboard/mytask'}>My Task</NavLink></li>
    <li><NavLink to={'/dashboard/createtask'}>Create Task</NavLink></li>
    <li><NavLink to={'/dashboard/alltask'}>All Task</NavLink></li>
  </>
  return (

    <div className='flex  '>

      <div className='hidden lg:flex bg-black min-h-screen w-[20%] lg:flex-col  justify-start'>
        <img src={user?.photoURL} alt="" className='h-[50px] w-[50px] rounded-[50%]'/>
        <ul className='menu uppercase text-white w-full'>
          {navitem}
          <div className='divider'></div>
          <li><NavLink to={'/'}>Home</NavLink></li>
        </ul>
      </div>
      <div className='w-[80%]'>
        {/* <Dashboard></Dashboard> */}
        <Outlet></Outlet>
      </div>


    </div>

  );
};

export default DashBoardLayOut;