import React from 'react';
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink/CustomLink';
import { IoMenuOutline } from 'react-icons/io5'


const PublicHeader = () => {
    return (
        <div className=' -mb-[112px] text-white w-full relative z-50'>
            <div className='max-w-[1440px] mx-auto'>
                <div className='px-[100px] xs:px-5 sm:px-10 flex justify-between items-center'>
                    <h1 className='font-dancing-script font-bold text-5xl text-[#D7B686] py-8'>Lezzatos</h1>
                    <div className='flex items-start gap-8 xs:hidden sm:hidden'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/our-menu'>Our Menu</CustomLink>
                        <CustomLink to='/reservation'>Reservation</CustomLink>
                        <CustomLink to='/news'>News</CustomLink>
                        <CustomLink to='/more'>More</CustomLink>
                    </div>
                    <div className='space-x-6 xs:hidden sm:hidden'>
                        <button><Link to='/login'>Login</Link></button>
                        <button className='px-4 py-1 border border-[#D7B686] hover:bg-[#d7b686] hover:text-gray-800 transition-all ease-linear'><Link to='/register'>Register</Link></button>
                    </div>
                    <button className='hidden xs:block sm:block'>
                        <IoMenuOutline className='text-white text-4xl' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PublicHeader;