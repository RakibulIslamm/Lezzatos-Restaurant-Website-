import React from 'react';
import { Link } from 'react-router-dom'


const PublicHeader = () => {
    return (
        <div className=' -mb-[112px] text-white w-full relative z-50'>
            <div className='max-w-[1920px] mx-auto'>
                <div className='px-[100px] flex justify-between items-center'>
                    <h1 className='font-dancing-script font-bold text-5xl text-[#D7B686] py-8'>Lezzatos</h1>
                    <div className='space-x-8'>
                        <Link to='/'>Home</Link>
                        <Link to='/our-menu'>Our Menu</Link>
                        <Link to='/reservation'>Reservation</Link>
                        <Link to='/news'>News</Link>
                        <Link to='/more'>More</Link>
                    </div>
                    <div className='space-x-6'>
                        <button><Link to='/login'>Login</Link></button>
                        <button className='px-4 py-1 border border-[#D7B686] hover:bg-[#d7b686] hover:text-gray-800 transition-all ease-linear'><Link to='/register'>Register</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicHeader;