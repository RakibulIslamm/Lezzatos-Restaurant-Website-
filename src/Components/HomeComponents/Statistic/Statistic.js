import React from 'react';
import bg from '../../../images/home-images/italian-food-pasta-food-background-GXK8VUE-BG-Section.jpg'

const Statistic = () => {
    return (
        <div className='py-20 bg-[#0B0E11] bg-cover bg-center' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),url(${bg})`
        }}>
            <div className='px-[100px] grid grid-cols-4 gap-5 text-white'>
                <div className='text-center space-y-4'>
                    <h2 className='text-5xl font-semibold'>12</h2>
                    <p className='text-xl tracking-widest'>Restaurants</p>
                </div>
                <div className='text-center space-y-4'>
                    <h2 className='text-5xl font-semibold'>8</h2>
                    <p className='text-xl tracking-widest'>Years Experience</p>
                </div>
                <div className='text-center space-y-4'>
                    <h2 className='text-5xl font-semibold'>50+</h2>
                    <p className='text-xl tracking-widest'>Menu Dishes</p>
                </div>
                <div className='text-center space-y-4'>
                    <h2 className='text-5xl font-semibold'>200+</h2>
                    <p className='text-xl tracking-widest'>Customers</p>
                </div>
            </div>
        </div>
    );
};

export default Statistic;