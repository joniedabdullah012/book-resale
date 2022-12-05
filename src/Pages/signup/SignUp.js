import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const handleSignUp = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('user create successfully')
                const userInfo = {
                    disoplayName: data.name

                }
                updateUser(userInfo)
                    .then(() => { })
                    .then(err => console.log(err))

            })
            .catch(error => {

                console.error(error)
                setSignUpError(error.message)
            })
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)} >


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input className="input input-bordered w-full max-w-xs" type="text" {...register("name")} />




                    </div>
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




                    </div>




                    <input value='Sign Up' className=' my-3 btn  bg-blue-400 w-full' type="submit" />

                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>

                <p className='my-3'>Already have a account? <Link className='text-primary' to='/login'>Please log in</Link></p>
                <div className="divider">OR</div>

                <button className='text-center btn btn-outline w-full p-3 rounded-xl'>CONTINUE WITH GOOGLE</button>



            </div>

        </div>
    );
};

export default SignUp;