import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10  bg-orange-500 text-white rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a href='/' className="link link-hover">Home</a>
                    <a href='/dashboard' className="link link-hover">Dashboard</a>
                    <a href='/login' className="link link-hover">login</a>
                    {/* <a className="link link-hover">Press kit</a> */}
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/shaikTazUddin01' target='_blank' className='text-2xl'><FaGithub></FaGithub></a>
                        <a className='text-2xl' href='https://www.linkedin.com/in/shaik-taz-uddin-1a47682a0/' target='_blank'>
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href='https://www.facebook.com/tazahmedcse/' target='_blank' className='text-2xl'>
                            <FaFacebook></FaFacebook>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by Shaik Taz Uddin</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;