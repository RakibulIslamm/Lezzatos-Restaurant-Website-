import React from 'react';
import Recipe from './Recipe/Recipe';

const Recipes = () => {
    return (
        <div className='py-20 bg-black relative'>
            <div className='px-[100px] max-w-[1920px] mx-auto text-white'>
                <h2 className='text-[#E3C08D] text-3xl font-semibold font-dancing-script py-3 text-center'>Recipes</h2>
                <h1 className='text-3xl font-semibold text-center pb-10'>Tips & Tricks</h1>
                <div className='grid grid-cols-3 gap-10'>
                    <Recipe />
                    <Recipe />
                    <Recipe />
                </div>
            </div>
        </div>
    );
};

export default Recipes;