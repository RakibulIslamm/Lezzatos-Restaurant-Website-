import React from 'react';
import SingleMenu2 from '../../HomeComponents/MenuDishes/SingleMenu/SingleMenu2';
import foodImg1 from '../../../images/our-menu-images/Subtract-1.jpg'
import foodImg2 from '../../../images/our-menu-images/02-menu.jpg'
import foodImg3 from '../../../images/our-menu-images/salad-45DBF7S-1.jpg'

const Appetizer = () => {
    return (
        <div className='py-20 bg-[#0D1518] relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto'>

                <div className='flex justify-between items-start gap-5'>
                    <div className='w-4/12'>
                        <div className='px-10 py-12 bg-white relative -mr-24 mt-28 z-20 space-y-10 shadow-2xl shadow-black'>
                            <h2 className='text-4xl text-[#E3C08D] font-dancing-script font-semibold'>Appetizer</h2>
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                        </div>
                    </div>
                    <div className='flex items-end justify-between gap-5 w-8/12'>
                        <div className='space-y-5 w-full'>
                            <img className='w-full h-[335px] object-cover' src={foodImg1} style={{
                                clipPath: 'polygon(15.8% 0%, 73.9% 0%, 100% 23.8%, 100% 100%, 84.2% 100%, 15.8% 100%, 0% 100%, 0% 0%)'
                            }} alt="" />
                            <img className='w-full h-[280px] object-cover' src={foodImg2} style={{
                                clipPath: 'polygon(15.8% 0%, 100% 0%, 100% 25%, 100% 70%, 75.5% 100%, 15.8% 100%, 0% 100%, 0% 0%)'
                            }} alt="" />
                        </div>
                        <div className='w-full'>
                            <img className='w-full h-[500px] object-cover' src={foodImg3} style={{
                                clipPath: 'polygon(25% 0%, 100% 0%, 100% 23.8%, 100% 100%, 75.5% 100%, 0% 100%, 0% 77%, 0% 23.3%)'
                            }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appetizer;