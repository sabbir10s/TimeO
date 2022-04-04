import React from 'react';

const SingleReview = ({ review }) => {
    // console.log(review);
    const { name, picture, rating, _review} = review;
    return (
        <div>
            <img src={picture} alt="Customer_Image" />
            <p>Rating: {rating}</p>
            <p>Name: {name}</p>
            <p><small>{_review}</small></p>
        </div>
    );
};

export default SingleReview;