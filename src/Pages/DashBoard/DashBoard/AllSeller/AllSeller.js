import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const AllSeller = () => {


    const { data: seller = [], refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/seller')
            const data = await res.json();
            return data;



        }

    });



    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount > 0) {

                    toast.success(' seller verify successfully')
                    refetch();
                }

            })
    }


    const handleDelete = (id) => {

        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Delete Successfully')

                }
                refetch()
            })

    }


    return (
        <div>
            <h2>All seller</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify Seller</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user?.role !== 'admin' &&

                                    <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-xs'>Make Admin seller verify</button>

                                }

                                    {
                                        user?.role === 'admin' &&

                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    }


                                </td>
                                <td><button onClick={() => handleDelete(user._id)} className='btn btn-danger btn-xs'>Delete</button></td>
                            </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllSeller;