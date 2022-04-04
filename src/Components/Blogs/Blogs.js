import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-10 grid grid-cols-1'>
            <div className='border shadow-lg p-6'>
                <h1 className='text-lg mb-4'><span className='font-bold'>Question-1:</span> What is Context API?  Explain purpose of context API.</h1>
                <h1><span className='font-bold'>Answer:</span> React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.In other words, React context allows us to share data (state) across our components more easily. React context is great when you are passing data that can be used in any component in your application. React context helps us avoid the problem of props drilling.</h1>
            </div>
            <div className='border shadow-lg p-6'>
                <h1 className='text-lg mb-4'><span className='font-bold'>Question-2:</span> Difference between inline and block elements</h1>
                <h1><span className='font-bold'>Answer:</span>
                    <br />
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 '>
                        <div className='border-2 p-3 mt-2'>
                            <b>Inline</b>
                            <p>01. Its never starts new line for the HTML</p> <br />
                            <p>02. It's doesn't allows to set a width and height on the element.</p> <br />
                            <p>03. Inline elements allow other inline elements to sit behind.</p> <br />

                        </div>

                        <div className='border-2 p-3 mt-2'>
                            <b>Block</b>
                            <p>01. Block elements always start in a line.</p><br />
                            <p>02. It's allows to set a width and height on the element.</p><br />
                            <p>03. Block elements doesn't allow other elements to sit behind</p><br />

                        </div>
                        <div className='border-2 p-3 mt-2'>
                            <b>Inline-Block</b>
                            <p>01. It doesn't start on a new line.</p><br />
                            <p>02. It's allows to set a width and height on the element.</p><br />
                            <p>03. Inline-Block elements have top and bottom margin.</p>
                        </div>

                    </div>
                </h1>
            </div>
        </div>
    );
};

export default Blogs;