import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookCatagorie from './BookCatagorie';

const BookCatagories = () => {
    const [catagories, setCatagories] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/bookCatagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    })
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols- gap-4  my-8'>
            {
                catagories.map(catagorie => <BookCatagorie
                    key={catagorie._id}
                    catagorie={catagorie}

                >{catagorie.name}</BookCatagorie>)
            }

        </div>
    );
};

export default BookCatagories;