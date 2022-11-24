import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';



const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('')
    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
            .catch(error => {

                console.error(error.message)
                setLoginError(error.message)

            })


    }




    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Log In</h2>

                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="email" {...register("email", { required: 'Email address required' })} />

                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}


                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="password" {...register("password", { required: "password is required" })} />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>


                    </div>



                    <input value='Login' className='btn  bg-blue-400 w-full' type="submit" />

                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }


                    </div>
                </form>

                <p className='my-3'>New to book sale <Link className='text-primary' to='/signup'>create new account</Link></p>
                <div className="divider">OR</div>

                <button className='text-center btn btn-outline w-full p-3 rounded-xl'>CONTINUE WITH GOOGLE</button>



            </div>

        </div>
    );
};

export default Login;