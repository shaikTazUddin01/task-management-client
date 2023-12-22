import React from 'react';
import useAxiosSecure from '../../../Hooks/axiosSecure/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';

const EditTask = () => {
const {id}=useParams()
console.log(id)
    const{user}=useAuth()
    const email=user?.email
    const axiosSecure = useAxiosSecure()

    const handleEditTask = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value;
        const description = form.descriptions.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;


        const task = { title, description, deadline, priority,id};
        console.log(task)

        axiosSecure.put('/createTask', task)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    form.reset()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "successfully Updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
            )
            .catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "something is wrong please try again",
                    showConfirmButton: false,
                    timer: 1500
                });
            })







    }

    return (
        <div className=" -z-10 min-h-[100vh] bg-cover"
        // style={{ backgroundImage: `url(${loginbg})` }}
        >
            <div className="flex justify-center items-center min-h-[100vh] bg-[#00000062] z-0 pt-10">
                <div className="card flex-shrink-0 w-[90%] md:max-w-lg shadow-2xl bg-[#ffffff71] my-10">
                    <h1 className='flex justify-center text-3xl lg:text-4xl font-bold py-5 bg-orange-500 rounded-t-2xl text-white'>Update Task</h1>
                    <form className="card-body" onSubmit={handleEditTask}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Title</span>
                            </label>
                            <input type="text" placeholder="title" className="input input-bordered" name='title' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Descriptions</span>
                            </label>
                            <input type="descriptions" placeholder="descriptions" className="input input-bordered" name='descriptions' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">DeadLine</span>
                            </label>
                            <input type="date" placeholder="Dead Line" className="input input-bordered" name='deadline' required />
                        </div>
                        {/* select option */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-lg">Priority:</span>
                            </label>
                            <select className="select select-bordered text-[16px]" name="priority">
                                <option disabled selected>Pick one</option>
                                <option value={'low'}>Low</option>
                                <option value={'moderate'}>Moderate</option>
                                <option value={'high'}>High</option>
                            </select>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Create Task" className="hover:bg-orange-600 bg-orange-500  text-white text-[17px] py-2 rounded-lg" />
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default EditTask;