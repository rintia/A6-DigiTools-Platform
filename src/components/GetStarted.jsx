import React from 'react';
import PackageImage from '../assets/package.png'
import RocketImage from '../assets/rocket.png'
import UserImage from '../assets/user.png'

const GetStarted = () => {
    return (
        <div className='text-center my-20 max-w-7xl mx-auto'>

            <h1 className='font-bold text-3xl'>Get Started in 3 steps</h1>
            <p>Start using premium digital tools in minutes, not hours</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                <div className='border-2 border-gray-400 p-4 rounded-lg shadow-xl'>
                    <div className='flex justify-end'>
                        <h1 className='bg-violet-600 px-4 py-3 rounded-full text-white font-bold'>01</h1>
                    </div>
                    <img className='bg-blue-300 p-5 rounded-full mx-auto' src={UserImage} alt="" />
                    <h1 className='text-2xl font-bold'>Create Account</h1>
                    <p>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className='border-2 border-gray-400 p-4 rounded-lg shadow-xl'>
                    <div className='flex justify-end'>
                        <h1 className='bg-violet-600 px-4 py-3 rounded-full text-white font-bold'>01</h1>
                    </div>
                    <img className='bg-blue-300 p-5 rounded-full mx-auto' src={PackageImage} alt="" />
                    <h1 className='text-2xl font-bold'>Choose Product</h1>
                    <p>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='border-2 border-gray-400 p-4 rounded-lg shadow-xl'>
                    <div className='flex justify-end'>
                        <h1 className='bg-violet-600 px-4 py-3 rounded-full text-white font-bold'>01</h1>
                    </div>
                    <img className='bg-blue-300 p-5 rounded-full mx-auto' src={RocketImage} alt="" />
                    <h1 className='text-2xl font-bold'>Start Creating</h1>
                    <p>Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;