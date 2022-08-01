import React from 'react';
import saladImg from '../../../../images/home-images/salad-45DBF7S.jpg'

const SingleMenu = () => {
    return (
        <div className='h-[500px] w-full bg-slate-500 bg-cover bg-center relative shadow-2xl shadow-black' style={{
            backgroundImage: `url(${saladImg})`,
            clipPath: 'polygon(0% 0%, 87.8% 0%, 100% 9%, 100% 70%, 100% 100%, 0% 100%, 0% 70%, 0% 30%)'
        }}>
            <div className='px-5 py-5 bg-white w-11/12 overflow-hidden h-[270px] absolute -bottom-52 hover:bottom-0 left-0 flex flex-col justify-between transition-all ease-in-out duration-300' style={{
                clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%, 0% 50%)'
            }}>
                <div className='flex items-center gap-2 pb-5'>
                    <span className='w-8 h-1 inline-block bg-[#E3C08D] rounded'></span>
                    <div>
                        <h2 className='text-xl font-semibold'>Appertizer Package</h2>
                    </div>
                </div>
                <p>Indian Chicken Curry</p>
                <p>Kebuli Rice</p>
                <p>Sirloin Steak</p>
                <h2 className='text-xl font-semibold text-[#E3C08D] mb-4'>$<span>145</span><span className='text-gray-600 text-sm font-normal'>/Person</span> </h2>
            </div>
        </div>
    );
};

export default SingleMenu;