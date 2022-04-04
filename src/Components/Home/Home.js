import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import { FaAngleDoubleRight } from 'react-icons/fa';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 justify-items-end items-center mx-10 pb-5 pt-8'>
                <div>
                    <h1 className="text-5xl mb-3">Time with Perfection</h1>
                    <small>Lots of people think whatever clock hands they have will fit a new clock movement. This is not usually true. The mounting holes are not well standardized. So, if you already have the clock hands, you can just choose a similar length and style from us. If you do not have hands, then a few simple rules should be followed so you can correctly choose what you need from us.</small>
                </div>
                <div>
                    <img width="300px" src="https://m.media-amazon.com/images/I/71IocB4x93L._AC_SL1500_.jpg" alt="" />
                </div>
            </div>

            <div className='mt-12 pt-8'>

                <h2 className='text-center text-3xl font-bold  py-7'>Customers Reviews ({reviews.length})</h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-7 content-center mx-10'>
                    {
                        reviews.slice(0, 3).map(review => <SingleReview key={review.id} review={review}></SingleReview>)
                    }
                </div>

                <div className='mx-10 my-10 '>
                    <Link className='text-xl inline-block bg-black px-7 py-2 rounded  text-white   hover:bg-blue-700 ' to="/reviews"> <span>See All Reviews</span> < FaAngleDoubleRight className='w-5 inline-block' />  </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;


