import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from '../CheckOutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);




const Payment = () => {
    const booking = useLoaderData();

    return (
        <div>
            <h1 className='text-3xl p-3'>payment for<span className='text-2xl  text-blue-500'> {booking.bookName} </span></h1>
            <p className='text-3xl p-3 '>Please pay <span className='text-3xl text-red-500'>  ${booking.resale_price}</span></p>


            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;