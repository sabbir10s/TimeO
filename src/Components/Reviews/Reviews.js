import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='m-auto'>
            <h2 className='text-center text-3xl font-bold my-2 py-3'>Customers Reviews ({reviews.length})</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 content-center m-7'>
                {
                    reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;