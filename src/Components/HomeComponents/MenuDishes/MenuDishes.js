import React from 'react';
import SingleMenu from './SingleMenu/SingleMenu';
import pattern2 from '../../../images/pattern-2.png'
import pattern3 from '../../../images/Pattern-3.png'
import koreanFood from '../../../images/home-images/korean-snack-foodsstreet-food-PSJRZNV-e1601997783790.jpg'
import SingleMenu2 from './SingleMenu/SingleMenu2';

const MenuDishes = () => {
    return (
        <div className='py-20 bg-[#0B0E11] relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto'>
                <div className='text-center'>
                    <h3 className='font-dancing-script text-3xl text-[#E3C08D]'>Special Dish</h3>
                    <h1 className='text-3xl text-white font-semibold mt-2'>Best Recommendation Menu</h1>
                </div>
                <div className='grid grid-cols-3 xs:grid-cols-1 gap-10 mt-12'>
                    <SingleMenu />
                    <SingleMenu />
                    <SingleMenu />
                </div>
                <div>
                    <div className='mt-20 pt-10 flex justify-between xs:flex-col-reverse relative'>
                        <div className='bg-white p-10 w-6/12 xs:w-full mt-20 xs:mt-0 -mr-20 relative z-20'>
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                        </div>
                        <div className='w-8/12 xs:w-full mb-20 xs:mb-5 relative'>
                            <img className='w-full h-full bg-cover bg-center' style={{
                                clipPath: 'polygon(0% 0%, 88.9% 0%, 100% 9.8%, 100% 85%, 100% 100%, 0% 100%, 0% 85%, 0% 15%)'
                            }} src={koreanFood} alt="" />
                            <img className='absolute -top-20 -left-20 transform' src={pattern3} alt="" />
                        </div>
                        <img className='absolute bottom-0 -right-10 transform rotate-90 xs:hidden' src={pattern2} alt="" />
                    </div>
                </div>
            </div>
            <img className=' transform rotate-90 absolute top-0 xs:w-[120px]' src={pattern2} alt="" />
        </div>
    );
};

export default MenuDishes;