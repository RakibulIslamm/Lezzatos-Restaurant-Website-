import React from 'react';
import { Link } from 'react-router-dom'


const PublicHeader = () => {
    return (
        <div className=' -mb-[112px] text-white w-full'>
            <div className='max-w-[1920px] mx-auto'>
                <div className='px-[100px] flex justify-between items-center'>
                    <h1 className='font-dancing-script font-bold text-5xl text-[#D7B686] py-8'>Lezzatos</h1>
                    <div className='space-x-6'>
                        <Link to='/'>Home</Link>
                        <Link to='/menu'>Menu</Link>
                        <Link to='/recipe'>Recipe</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/blogs'>Blogs</Link>
                    </div>
                    <div className='space-x-6'>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicHeader;