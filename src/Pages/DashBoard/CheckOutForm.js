import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import React, { useEffect } from 'react';
import { useState } from 'react';



const CheckOutForm = ({ booking }) => {

    const { resale_price, email, cusTomername, _id
    } = booking;

    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const [processing, setProcessing] = useState(false)

    const [cardError, setCardError] = useState('')
    const stripe = useStripe()
    const elements = useElements()


    useEffect(() => {

        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`

            },
            body: JSON.stringify({ resale_price }),
        })
            .then((res) => res.json())
            .then((data) =>
                setClientSecret(data.clientSecret));
    }, [resale_price]);



    const handleSubmit = async (event) => {

        event.preventDefault()

        if (!stripe || !elements) {

            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }


        setSuccess('')
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: cusTomername
                        ,
                        email: email

                    },
                }

            }
        );
        if (confirmError) {

            setCardError(confirmError.message)
            return
            // Inform the customer that there was an error.
        }

        if (paymentIntent.status === "succeeded") {

            console.log('card info', card);


            // store payment save

            const payment = {
                resale_price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id,




            }
            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`

                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('Congrats pyament complete')
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false)










    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm btn-info my-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            <p className="text-red-600">{cardError}</p>

            {
                success && <div>

                    <p className='text-green-600'>{success}</p>
                    <p>Your tranction id <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckOutForm;