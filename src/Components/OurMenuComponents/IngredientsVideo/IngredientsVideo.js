import React from 'react';
import bg from '../../../images/our-menu-images/BG-section-discover-1-NEW.jpg'
import videoThumb from '../../../images/our-menu-images/autumn-atmosphere-objects-PMNW3CW.jpg'
import { IoPlayCircleOutline } from 'react-icons/io5'

const IngredientsVideo = () => {
    return (
        <div className='py-20 bg-[#0D1518] min-h-screen bg-cover bg-bottom relative' style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.85)),url(${bg})`
        }}>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto'>
                <h2 className='text-[#E3C08D] text-4xl text-center font-semibold font-dancing-script'>Discover</h2>
                <h1 className='text-3xl text-center text-white font-semibold'>The Best Ingredients</h1>
                <div className='relative mt-10 w-full h-[500px]'>
                    <img className='w-full h-full object-cover' src={videoThumb} alt="" />
                    <div className='absolute w-full h-full bg-black bg-opacity-50 top-0 left-0 flex justify-center items-center shadow-2xl shadow-black'>
                        <button>
                            <IoPlayCircleOutline className='text-[130px] text-white' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IngredientsVideo;