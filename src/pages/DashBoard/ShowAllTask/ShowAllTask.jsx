import React from 'react';
import useAllTask from '../../../Hooks/allTask/useAllTask';
import './shoalltask.css'
import useAxiosSecure from '../../../Hooks/axiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ShowAllTask = () => {
    const [data, isPending, refetch] = useAllTask()
    const axiosSecure = useAxiosSecure()
    console.log(data)
    if (isPending) {
        return <p>loading...</p>
    }

    // delete item
    const handledelete = (id) => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/createTask/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }).catch(err => {
                        Swal.fire({
                            // title: "",
                            text: "something is wrong please try again.",
                            icon: "success"
                        });
                    })
            }
        });







        axiosSecure.delete(`/createTask/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "successfully delete a item",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err)
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
                        data?.map((item, index) =>
                            <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item?.title}</td>
                                <td>{item?.description}</td>
                                <td>{item?.deadline}</td>
                                <td>{item?.priority}</td>
                                <td>{item?.status}</td>
                                <td className='flex gap-3'>
                                    <Link to={`/dashboard/taskedit/${item?._id}`}>
                                    <button className='btn btn-success'>Edit</button>
                                    </Link>
                                    <button className='btn btn-error' onClick={() => handledelete(item?._id)}>Delete</button>
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