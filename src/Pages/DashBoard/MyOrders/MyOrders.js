import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)




    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data;

        }
    })
    return (
        <div>
            <h2>My Orders</h2>
            <div className="overflow-x-auto my-5">
                <table className="table w-full">


                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) =>
                                <tr key={booking._id} className="hover">

                                    <th>{i + 1}</th>
                                    <th><div className="mask mask-squircle w-12 h-12">
                                        <img src={bookings.photoURL} alt='' />
                                    </div></th>

                                    <td>{booking.bookName}</td>
                                    <td>{booking.resale_price}</td>
                                    <td>Blue</td>
                                </tr>


                            )
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;