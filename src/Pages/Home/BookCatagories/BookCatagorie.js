import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookCatagorie = ({ catagorie }) => {

    const { name, _id,
        category_id, category
    } = catagorie;
    console.log(name, _id,
        category_id, category
    );















    return (
        <div className=''>




            <div className=" card w-96   bg-base-100 shadow-xl image-full">


                <figure><img src="https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU=" alt="Shoes" /></figure>
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