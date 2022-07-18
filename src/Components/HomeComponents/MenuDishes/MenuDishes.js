import React from 'react';
import SingleMenu from './SingleMenu/SingleMenu';

const MenuDishes = () => {
    return (
        <div className='py-20 bg-[#0B0E11]'>
            <div className='px-[100px] max-w-[1920px] mx-auto'>
                <div className='text-center'>
                    <h3 className='font-dancing-script text-2xl text-[#E3C08D]'>Special Dish</h3>
                    <h1 className='text-3xl text-white font-semibold mt-2'>Best Recommendation Menu</h1>
                </div>
                <div className='grid grid-cols-3 gap-5 mt-12'>
                    <SingleMenu />
                    <SingleMenu />
                    <SingleMenu />
                </div>
            </div>
        </div>
    );
};

export default MenuDishes;