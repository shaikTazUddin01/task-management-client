import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Dashboard from '../../component/DashBoard/Dashboard';
import useAuth from '../../Hooks/useAuth/useAuth';
import { MdOutlineMenu } from "react-icons/md";
const DashBoardLayOut = () => {
  const {user}=useAuth()
  const navitem = <>
    <li><a >
      
      <img src={user?.photoURL} alt="" className='w-[50px] h-[50px] rounded-[50%] ml-7' />
      </a></li>
    <li><NavLink to={'/dashboard/mytask'}>My Task</NavLink></li>
    <li><NavLink to={'/dashboard/createtask'}>Create Task</NavLink></li>
    <li><NavLink to={'/dashboard/alltask'}>All Task</NavLink></li>
  </>
  return (

   
    // </div>
    <div className="flex z-10">
            
    <div className='lg:w-64  lg:bg-orange-500 lg:min-h-screen lg:p-5'>

    {/* <div className='hidden md:flex flex-col '>
        <img src={user?.photoURL} alt="" className='w-[50px] h-[50px] rounded-[50%] ml-7'/>
       
    </div> */}
        <div className='hidden lg:flex'>
            <ul className='menu text-white uppercase w-full'>
               {navitem}

                
                {/* shared menu item */}
                <div className="divider bg-white h-[2px] rounded-xl"></div>
                <li><NavLink to={'/'}>
                    Home</NavLink></li>
                
            </ul>
        </div>

        {/* ------dware---------- */}
        <div className='lg:hidden z-20'>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle  " />
                <div className="drawer-content absolute mt-1 ml-1">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className=" drawer-button text-2xl font-semibold btn">
                        {/* <IoMdMenu></IoMdMenu> */}
                        <MdOutlineMenu></MdOutlineMenu>
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-48 md:w-80 min-h-full bg-orange-500  z-10 text-white">
                        {navitem}
                        {/* shared menu item */}
                        <div className="divider bg-orange-500 h-[2px] rounded-xl"></div>
                        <li><NavLink to={'/'}>
                            Home</NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </div>









    </div>





    <div className="flex-1">
        <Outlet></Outlet>
    </div>
</div>

  );
};

export default DashBoardLayOut;