import React from 'react';
import useAllTask from '../../../Hooks/allTask/useAllTask';
import './shoalltask.css'
import useAxiosSecure from '../../../Hooks/axiosSecure/useAxiosSecure';

const ShowAllTask = () => {
    const [data, isPending] = useAllTask()
    const axiosSecure=useAxiosSecure
    console.log(data)
    if (isPending) {
        return <p>loading...</p>
    }

    // delete item
    const handledelete=(id)=>{
        console.log(id)
        axiosSecure.delete('alltesk',id)
        .then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(error)
        })
    }
    return (
        <div className="overflow-x-auto px-5 py-5">
            <h1 className='text-center text-4xl pb-10 pt-5'>
                Show All Task
            </h1>
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>deadline</th>
                        <th>Priority</th>
                        <th>status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data?.map((item,index) =>
                            <tr key={item._id}>
                                <th>{index+1}</th>
                                <td>{item?.title}</td>
                                <td>{item?.description}</td>
                                <td>{item?.deadline}</td>
                                <td>{item?.priority}</td>
                                <td>{item?.status}</td>
                                <td className='flex gap-3'>
                                    <button className='btn btn-success'>Edit</button>
                                    <button className='btn btn-error' onClick={()=>handledelete(item?._id)}>Delete</button>
                                </td>
                            </tr>


                        )
            }

                </tbody>
            </table>
        </div>
    );
};

export default ShowAllTask;