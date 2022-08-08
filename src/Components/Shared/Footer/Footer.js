import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-10 bg-black relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto text-white'>
                <div className='flex justify-between gap-20 xs:flex-col xs:gap-5'>
                    <div className='w-3/5 xs:w-full'>
                        <div className='w-3/5 xs:w-full'>
                            <h1 className='text-5xl text-[#D7B686] font-semibold font-dancing-script'>Lezzatos</h1>
                            <p className='text-normal font-extralight py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Sed ut perspiciatis unde omnis iste </p>
                            <div className='flex items-center gap-4 text-xl'>
                                <BsFacebook />
                                <BsTwitter />
                                <BsInstagram />
                                <BsYoutube />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Menu</h2>
                        <span className='block border-b-2 border-white w-[40px] mt-1'></span>
                        <div className='flex justify-start items-start flex-col gap-2 mt-4'>
                            <Link to='/'>Home</Link>
                            <Link to='/ourmenu'>Our Menu</Link>
                            <Link to='/reservation'>Reservation</Link>
                            <Link to='/aboutus'>About Us</Link>
                            <Link to='/news'>News</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Find Us</h2>
                        <span className='block border-b-2 border-white w-[50px] mt-1'></span>
                        <div className='mt-4 space-y-2'>
                            <p>Braga Street 28, Bandung, West Java, Indonesia </p>
                            <p>+62 863812123</p>
                            <p>lezzatos@restaurant.com</p>
                        </div>
                    </div>
                </div>
                <span className='block w-full border-b border-gray-700 mt-5'></span>
                <p className='font-light mt-5'>&copy; Copyright Lezzatos 2020, All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;