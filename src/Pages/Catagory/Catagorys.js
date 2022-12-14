import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyOrders from '../DashBoard/MyOrders/MyOrders';
import BookModal from './BookNowModal/BookModal';
import Catagory from './Catagory';

const Catagorys = () => {

    const [booksModal, setBooksModal] = useState(null)




    const books = useLoaderData()
















    return (
        <div>



            <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4 my-9 p-10 '>
                {
                    books.map(book => <Catagory
                        key={book._id}
                        book={book}
                        setBooksModal={setBooksModal}
                        booksModal={booksModal}




                    ></Catagory>)

                }

            </div>




            {booksModal && <BookModal
                booksModal={booksModal}
                setBooksModal={setBooksModal}
            >

            </BookModal>
            }




























        </div>
    );
};

export default Catagorys;