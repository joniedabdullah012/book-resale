import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {

    const { logOut } = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('login')
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p className='text-red-500'>Something went to wrong</p>
            <p className='text-red-500'>{error.statusText || error.message}</p>
            <p>Please <button onClick={handleLogOut} className='text-blue-600' to='/login'>Sign Out</button></p>

        </div>
    );
};

export default DisplayError;