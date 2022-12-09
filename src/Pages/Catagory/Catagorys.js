import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from './Catagory';

const Catagorys = () => {

    const books = useLoaderData()
    console.log(books);













    return (
        <div>
            <p>books:{books.length}</p>

            {
                books.map(book => <Catagory
                    key={book._id}
                    book={book}
                ></Catagory>)
            }















        </div>
    );
};

export default Catagorys;