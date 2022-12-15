import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllSeller = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;



        }

    });

    const handleVerify = id => {
        fetch(`http://localhost:5000/users/verify/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {

                    toast.success(' verify successfully')
                    refetch();
                }

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
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'verify' && <button onClick={() => handleVerify(user._id)} className='btn btn-primary btn-xs'>Verify seller</button>}</td>
                                <td><button className='btn btn-danger btn-xs'>Delete</button></td>
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