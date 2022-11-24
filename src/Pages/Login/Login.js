import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';



const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl'>Log In</h2>

                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="email" {...register("email")} />


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password" {...register("password")} />

                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>


                    </div>



                    <input value='Login' className='btn  bg-blue-400 w-full' type="submit" />
                </form>

                <p>New to book sale <Link className='text-primary' to='/signup'>create new account</Link></p>
                <div className="divider">OR</div>

                <button className='text-center btn-outline w-full p-3 rounded-xl'>CONTINUE WITH GOOGLE</button>



            </div>

        </div>
    );
};

export default Login;