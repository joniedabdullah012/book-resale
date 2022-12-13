import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookModal = ({ booksModal, setBooksModal }) => {

    const { name, resale_price, title, } = booksModal;
    const { user } = useContext(AuthContext)


    const handleBooking = event => {

        event.preventDefault();

        const form = event.target;
        const cusTomername = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {

            bookName: name,
            cusTomername,
            email,
            location,
            phone,
            resale_price

        }

        fetch('http://localhost:5000/bookings', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    setBooksModal(null);
                    toast.success('Booking Confirm')
                }
            })



    }






    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-5' >
                        <input name="bookname" type="text" value={name} readOnly placeholder="Type here" className="input input-bordered" />
                        <input type="text" value={resale_price} placeholder="Type here" className="input input-bordered" />
                        <input name="name" defaultValue={user?.displayName} disabled type="name" placeholder="Your Name" className="input input-bordered" />
                        <input name="email" defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered" disabled />
                        <input name="phone" type="text" placeholder="Phone" className="input input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input input-bordered" />
                        <input className='btn btn-primary w-full ' type="submit" value="Submit" />
                    </form>

                </div>
            </div>


        </>
    );
};

export default BookModal;