import React, { useEffect } from 'react';
import { useState } from 'react';
import Catagorys from '../../Catagory/Catagorys';
import Banner from '../Banner/Banner';
import BookCatagories from '../BookCatagories/BookCatagories';
import LearnMore from '../LearnMore/LearnMore';


const Home = () => {


    return (
        <div className=''>


            <Banner></Banner>

            <p className='text-4xl font text-white rounded-xl border- p-5 bg-primary font-bold text-lg my-10 text-center'>Book Catagory</p>


            <BookCatagories></BookCatagories>



            <LearnMore ></LearnMore>






        </div>
    );
};

export default Home;