import React from 'react';
import pattern2 from '../../../images/pattern-2.png'
import pattern10 from '../../../images/Pattern-10.png'

const Newsletter = () => {
    return (
        <div className='py-20 bg-[#0D1518] relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1920px] mx-auto text-white flex justify-between items-end gap-10 xs:flex-col xs:gap-5'>
                <div className='w-2/6 xs:w-full'>
                    <h2 className='text-3xl text-[#E3C08D] font-dancing-script font-semibold'>Newsletter</h2>
                    <h1 className='text-3xl font-semibold'>Subscribe Now !</h1>
                </div>
                <form className='w-4/6 xs:w-full space-x-3 xs:space-x-0'>
                    <input className=' bg-black bg-opacity-5 border border-white py-2 px-4 w-8/12 outline-none text-white placeholder:text-white' type="text" placeholder='Your Email' />
                    <button className='uppercase text-[#0D1518] px-5 py-2 bg-[#E3C08D] border border-[#E3C08D]'>Subscribe</button>
                </form>
            </div>
            <img className=' absolute top-0 left-0 transform rotate-90 w-[100px]' src={pattern2} alt="" />
            <img className=' absolute top-1/2 right-0 transform -translate-y-1/2 w-[100px]' src={pattern10} alt="" />
        </div>
    );
};

export default Newsletter;