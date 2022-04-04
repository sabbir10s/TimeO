import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 justify-items-end items-center mx-10'>
                <div>
                    <h1 className="text-5xl mb-3">Time with Perfection</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore aut, maxime beatae magnam deleniti illum tenetur minus quos soluta molestias assumenda minima aperiam labore odio officiis provident culpa libero.</p>
                </div>
                <div>
                    <img width="300px" src="https://m.media-amazon.com/images/I/71IocB4x93L._AC_SL1500_.jpg" alt="" />
                </div>
            </div>

            <div>
                <h2 className='text-center text-3xl font-bold mt-10'>Customers Reviews ({reviews.length})</h2>
                {
                    reviews.map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Home;