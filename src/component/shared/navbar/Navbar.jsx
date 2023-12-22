import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth/useAuth';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import icon from '/vite.svg'

const Navbar = () => {
    const { user,auth } = useAuth()

    const handleLogOut=()=>{
        signOut(auth)
        .then((result) => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "successfully you sign up",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                position: "center",
                icon: "error",
                title: errorMessage,
                showConfirmButton: false,
                timer: 1500
            });
        
    })
    }
    const navItem = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/dashboard'}>DashBorder</NavLink></li>
        {
            user ?
                <li onClick={handleLogOut}><Link>logout</Link></li>
                :
                <li><NavLink to={'/login'}>login</NavLink></li>

        }
    </>
    return (
        <div>
            <div className="navbar bg-orange-500 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-orange-500 text-white">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <img src={icon} alt="" />
                        TaskManagement</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;