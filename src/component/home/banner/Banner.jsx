import React from 'react';
import bannerImg from '../../../assets/banner-img/b.jpg'
const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center shadow-lg shadow-[#f39f60f4] px-5 min-h-[50vh]'>
            <div className='w-full md:w-1/2  md:pl-5'>
                <h1 className='text-3xl mt-10 md:text-4xl lg:text-6xl font-bold'>Task Management</h1>
                <p className='mt-4'>
                    Task management is essential for organizing work, setting priorities, and optimizing resources, fostering efficiency and goal achievement. It facilitates communication and collaboration, ensures accountability,</p>
                    <a href="/dashboard">
                    <button className='bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-700 mt-4 font-semibold mb-10'>Let’s Explore</button>
                    </a>
            </div>
            <div className=' md:w-1/2 mt-5'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;