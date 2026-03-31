import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center my-20 text-white text-4xl font-bold py-10'>
            <div className='border-white border-r-2 px-25'>50k+ <br /> <span className='font-medium text-sm'>Active Users</span></div>
            <div className='border-white border-r-2 px-25'>200+ <br /> <span className='font-medium text-sm'>Premium Tools</span></div>
            <div className=' px-25'>4.9 <br /> <span className='font-medium text-sm'>Rating</span></div>
        </div>
    );
};

export default Rating;