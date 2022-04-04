import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <p className='text-center text-5xl py-2'>TimeO</p>
            <div className="text-sm font-medium text-center text-black-100 border-b border-gray-500 dark:text-gray-400 dark:border-gray-700 mb-5">
                <ul className="flex flex-wrap justify-center -mb-px">
                    <li className="mr-2">
                        <CustomLink to="/home" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 ">HOME</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to="/reviews" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 ">REVIEWS</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to="/dashboard" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 ">DASHBOARD</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to="/blogs" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 ">BLOGS</CustomLink>
                    </li>
                    <li className="mr-2">
                        <CustomLink to="/about" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-blue-700 hover:border-blue-700 ">ABOUT</CustomLink>
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Header;