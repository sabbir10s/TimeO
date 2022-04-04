import React from 'react';

const SingleReview = ({ review }) => {
    // console.log(review);
    const { name, picture, rating, _review } = review;
    return (
        <div className='min-w-[300px] border p-3 shadow-lg rounded-xl'>
            <div className='flex items-center gap-2'>
                <img className='rounded-full w-12' src={picture} alt="Customer_Image" />
                <p className='font-bold'>{name} </p>
            </div>
            <p className='text-amber-600'>Rating {rating} out of 5</p>
            <p><small>{_review}</small></p>
        </div>
    );
};

export default SingleReview;