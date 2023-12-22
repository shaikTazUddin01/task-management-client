import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import useAuth from '../../Hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignUP = () => {
    const { signup ,auth } = useAuth()
    console.log(name)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(photo)
        signup(email, password)
            .then((result) => {
                if (result) {
                    updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL:photo
                      }).then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "successfully you sign up",
                            showConfirmButton: false,
                            timer: 1500
                        });
                      }).catch((error) => {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "something is wrong please try again",
                            showConfirmButton: false,
                            timer: 1500
                        });
                      });

                   
                }
                
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 1500
                });

            });

        console.log(name, email, password)
    }
    return (
        <div>
            <div className=" min-h-[100vh] bg-cover"
            // style={{ backgroundImage: `url(${loginbg})` }}
            >
                <div className="flex justify-center items-center min-h-[100vh] bg-[#00000062]">
                    <div className="card flex-shrink-0 w-[90%] md:max-w-lg shadow-2xl bg-[#ffffff71] my-10">
                        <h1 className='flex justify-center text-3xl lg:text-4xl font-bold py-5 bg-orange-500 rounded-t-2xl text-white'>Sign Up</h1>
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo Url" className="input input-bordered" name='photo' required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className="hover:bg-orange-600 bg-orange-500 text-white text-[17px] py-2 rounded-lg" />
                            </div>
                        </form>
                        <div className='flex justify-center items-center -mt-5'>
                            <div className='bg-orange-500 h-[2px] w-1/4'></div>
                            <div className='px-2'>
                                <h1 className='text-lg font-semibold'>OR</h1>
                            </div>
                            <div className='bg-orange-500 h-[2px] w-1/4'></div>
                        </div>
                       

                        <div className='flex justify-center mb-5'>
                            <p className='text-[18px] font-semibold'>Do't Have An Account <Link to={'/login'} className='text-blue-700 font-bold'>Sign in</Link></p>
                        </div>
                    </div>
                    {/* <ToastContainer></ToastContainer> */}
                </div>
            </div>
        </div>
    );
};

export default SignUP;