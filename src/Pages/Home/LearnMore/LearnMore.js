import React from 'react';
import book5 from '../../../Assest/book5.jpg (2).jpg'

const LearnMore = () => {
    return (



        <div >
            <div className="card glass p-7 border-dashed my-8 border-4  border-blue-700">
                <figure><img className='rounded-lg w-96 ' src={book5} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-blue-700">Life hack</h2>
                    <p className='text-blue-700'>How to improve your reading skill?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default LearnMore;