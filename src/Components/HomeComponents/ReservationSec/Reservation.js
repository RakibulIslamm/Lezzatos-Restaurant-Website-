import React from 'react';
import pattern2 from '../../../images/pattern-2.png'

const Reservation = () => {
    return (
        <div className='py-20 bg-gray-600'>
            <div className='px-[100px] max-w-[1920px] mx-auto'>
                <div className='flex justify-between items-center gap-20'>
                    <div className='w-full text-white'>
                        <h2 className='text-[#E3C08D] text-3xl font-semibold font-dancing-script py-3'>Reservation</h2>
                        <h1 className='text-3xl font-semibold pb-3'>Fell Happiness by Making <br /> a Reservation</h1>
                        <p className=' font-light'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architectoerror sit voluptatem accusantium doloremque laudantium  ab illo inventore veritatis et quasi</p>
                    </div>
                    <div className='w-full bg-[#E1BE8B] p-12 relative' style={{
                        clipPath: 'polygon(0% 0%, 88.3% 0%, 99.8% 14%, 100% 69%, 100% 100%, 0% 100%, 0% 70%, 0% 30%)'
                    }}>
                        <h2 className='text-white text-center text-2xl font-semibold pb-5'>Book Table</h2>
                        <form className='space-y-4'>
                            <input className=' bg-black bg-opacity-5 border border-white w-full py-2 px-4 outline-none text-white placeholder:text-white' type="text" placeholder='Name' />
                            <div className='flex justify-between items-center gap-4'>
                                <input className=' bg-black bg-opacity-5 border border-white w-full py-2 px-4 outline-none text-white placeholder:text-white' type="text" placeholder='Phone Number' />
                                <select className='bg-black bg-opacity-5 border border-white w-full py-2 px-4 outline-none text-white'>
                                    <option className='text-black' value="1">1 Person</option>
                                    <option className='text-black' value="2">2 Persons</option>
                                    <option className='text-black' value="3">3 Persons</option>
                                    <option className='text-black' value="4">4 Persons</option>
                                </select>
                            </div>
                            <div className='flex justify-between items-center gap-4'>
                                <input className='bg-black bg-opacity-5 border border-white w-full py-2 px-4 outline-none text-white placeholder:text-white' type="text" placeholder='12/12/22' onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} />
                                <input className='bg-black bg-opacity-5 border border-white w-full py-2 px-4 outline-none text-white placeholder:text-white' type="text" placeholder='19:00 PM' onFocus={(e) => (e.target.type = "time")} onBlur={(e) => (e.target.type = "text")} />
                            </div>
                            <button className='uppercase text-[#E1BE8B] px-5 py-2 block mx-auto bg-white w-6/12'>Book Now</button>
                        </form>
                        <img className='absolute top-0 left-0 transform rotate-90 w-[80px] mix-blend-color-dodge' src={pattern2} alt="" />
                        <img className='absolute bottom-0 right-0 transform -rotate-90 w-[80px] mix-blend-color-dodge' src={pattern2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;