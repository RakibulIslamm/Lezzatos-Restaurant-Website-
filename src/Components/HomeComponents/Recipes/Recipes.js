import React from 'react';
import Recipe from './Recipe/Recipe';
import pattern2 from '../../../images/pattern-2.png'

const Recipes = () => {
    return (
        <div className='py-20 bg-black relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto text-white'>
                <h2 className='text-[#E3C08D] text-3xl font-semibold font-dancing-script py-3 text-center'>Recipes</h2>
                <h1 className='text-3xl font-semibold text-center pb-10'>Tips & Tricks</h1>
                <div className='grid grid-cols-3 gap-10 xs:grid-cols-1'>
                    <Recipe />
                    <Recipe />
                    <Recipe />
                </div>
            </div>
            <img className=' absolute top-0 right-0 transform rotate-180' src={pattern2} alt="" />
        </div>
    );
};

export default Recipes;