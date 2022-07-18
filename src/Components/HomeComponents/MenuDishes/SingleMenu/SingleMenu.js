import React from 'react';
import saladImg from '../../../../images/home-images/salad-45DBF7S.jpg'

const SingleMenu = () => {
    return (
        <div className='h-[500px] w-full bg-slate-500 bg-cover bg-center relative shadow-2xl shadow-black' style={{
            backgroundImage: `url(${saladImg})`,
            clipPath: 'polygon(0% 0%, 88.9% 0%, 100% 9.8%, 100% 85%, 100% 100%, 0% 100%, 0% 85%, 0% 15%)'
        }}>
            <div className='px-5 py-5 bg-white w-11/12 overflow-hidden h-16 hover:h-[270px] absolute bottom-0 left-0 flex flex-col justify-between transition-all ease-in-out duration-200' style={{
                clipPath: 'polygon(0 0, 90% 0, 100% 15%, 100% 100%, 0 100%, 0% 50%)'
            }}>
                <div className='flex items-center gap-2 pb-5'>
                    <span className='w-8 h-1 bg-black inline-block'></span>
                    <div>
                        <h2 className='text-xl font-semibold'>Appertizer Package</h2>
                    </div>
                </div>
                <p>Indian Chicken Curry</p>
                <p>Kebuli Rice</p>
                <p>Sirloin Steak</p>
                <h2 className='text-xl font-semibold'>$<span>145</span>/Person<span></span> </h2>
            </div>
        </div>
    );
};

export default SingleMenu;