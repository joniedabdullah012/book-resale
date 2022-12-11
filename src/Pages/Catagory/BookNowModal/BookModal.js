import React from 'react';

const BookModal = ({ booksModal, setBooksModal }) => {

    const { name, resale_price, title, } = booksModal;


    const handleBooking = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {

            bookName: name,
            name,
            email,
            location,
            phone,

        }
        console.log(booking);
        setBooksModal(null);


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
                        <input name="name" type="name" placeholder="Your Name" className="input input-bordered" />
                        <input name="email" type="email" placeholder="Email" className="input input-bordered" />
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