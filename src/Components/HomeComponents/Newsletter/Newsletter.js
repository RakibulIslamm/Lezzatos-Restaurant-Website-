import React from 'react';

const Newsletter = () => {
    return (
        <div className='py-20 bg-[#0D1518] relative'>
            <div className='px-[100px] max-w-[1920px] mx-auto text-white flex justify-between items-end gap-10'>
                <div className='w-2/6'>
                    <h2 className='text-3xl text-[#E3C08D] font-dancing-script font-semibold'>Newsletter</h2>
                    <h1 className='text-3xl font-semibold'>Subscribe Now !</h1>
                </div>
                <form className='w-4/6 space-x-3'>
                    <input className=' bg-black bg-opacity-5 border border-white py-2 px-4 w-8/12 outline-none text-white placeholder:text-white' type="text" placeholder='Your Email' />
                    <button className='uppercase text-[#0D1518] px-5 py-2 bg-[#E3C08D] border border-[#E3C08D]'>Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;