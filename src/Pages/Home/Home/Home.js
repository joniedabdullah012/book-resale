import React, { useEffect } from 'react';
import { useState } from 'react';
import Catagorys from '../../Catagory/Catagorys';
import Banner from '../Banner/Banner';
import BookCatagories from '../BookCatagories/BookCatagories';


const Home = () => {


    return (
        <div className=''>
            <p>This is home</p>

            <Banner></Banner>

            <BookCatagories></BookCatagories>






        </div>
    );
};

export default Home;