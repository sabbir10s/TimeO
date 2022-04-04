import React from 'react';
import useReviews from '../../Hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div>
            <h1 className='text-3xl'>Review Section ({reviews.length})</h1>
        </div>
    );
};

export default Reviews;