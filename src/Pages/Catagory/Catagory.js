import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleCheck, facircle } from '@fortawesome/free-regular-svg-icons';
import BookModal from './BookNowModal/BookModal';
import MyOrders from '../DashBoard/MyOrders/MyOrders';



const Catagory = ({ book, setBooksModal, booksModal }) => {


    const { name, img, location, resale_price, orginal_price, seller_name, number, uses, date } = book;



    return (
        <div>


            <div className="card w-96 h-full bg-base-100 shadow-xl ">
                <figure><img className='w-36' src={img} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title text-blue-600">
                        Book Name: {name}

                    </h2>
                    <p className='text-sky-700 font-bold'>Seller Name: {seller_name} <FontAwesomeIcon className='solid text-blue-700' icon={faCircleCheck} /> </p>
                    <p className='text-sky-700 font-bold'>Location: {location} </p>
                    <p className='text-sky-700 font-bold'>Contact: {number}</p>
                    <p className='text-sky-700 font-bold'>Orginal Price: {orginal_price}</p>
                    <p className='text-sky-700 font-bold'>Resale Price: {resale_price}</p>
                    <p className='text-sky-700 font-bold'>Uses: {uses}</p>
                    <p className='text-sky-700 font-bold'>Date: {date}</p>


                    <div className="card-actions justify-end">

                        <div className="">

                            <label className="btn btn-primary" htmlFor="booking-modal" onClick={() => setBooksModal(book)} > Book Now</label>
                        </div>
                    </div>
                </div>
            </div>






        </div >
    );
};

export default Catagory;