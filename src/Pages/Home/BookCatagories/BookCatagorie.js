import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import book5 from '../../../Assest/book5.jpg (2).jpg'

const BookCatagorie = ({ catagorie }) => {

    const { name, _id,
        category_id, category
    } = catagorie;















    return (
        <div className=' '>




            <div className=" card w-96   bg-base-100 shadow-xl image-full">


                <figure><img src={book5} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Do you like {name} book? Old books of {name} can be found here</h2>
                    <p></p>
                    <div className="card-actions justify-end">


                        <Link to={`/bookCatagoriesId/${category}`}> <button className="btn btn-primary ">{name}</button></Link>










                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookCatagorie;