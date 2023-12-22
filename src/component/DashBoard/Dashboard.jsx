import React from 'react';
import useAllTask from '../../Hooks/allTask/useAllTask';
import useAuth from '../../Hooks/useAuth/useAuth';

const Dashboard = () => {
    const [data ] = useAllTask()
    
    console.log(data)
    return (
        <div className='flex gap-5 px-10 pt-40 justify-center'>
            <div className='h-20 w-64 card bg-red-500 flex justify-center items-center text-white'>
                <h1 className='text-4xl font-semibold'>Total Task:</h1>
                <p className='text-2xl font-semibold'>{data?.length}</p>
            </div>
            <div className='h-20 w-64 card bg-red-500 flex justify-center items-center text-white'>
                <h1 className='text-4xl font-semibold'>On Going:</h1>
                <p className='text-2xl font-semibold'>{data?.length}</p>
            </div>
            <div className='h-20 w-64 card bg-red-500 flex justify-center items-center text-white'>
                <h1 className='text-4xl font-semibold'>Completed:</h1>
                <p className='text-2xl font-semibold'>{data?.length}</p>
            </div>
        </div>
    );
};

export default Dashboard;
