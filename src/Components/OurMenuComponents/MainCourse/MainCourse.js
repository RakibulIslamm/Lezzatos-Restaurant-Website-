import React from 'react';
import SingleMenu2 from '../../HomeComponents/MenuDishes/SingleMenu/SingleMenu2';
import img1 from '../../../images/our-menu-images/raw-meat-with-ingredients-for-cooking-PWHM492-1.jpg'
import img2 from '../../../images/our-menu-images/duck-legs-confit-with-potato-gratin-and-mushroom-s-HMBACUZ.jpg'
import img3 from '../../../images/our-menu-images/indian-lunch-dinner-CLDWFXZ-1.jpg'
import pattern2 from '../../../images/pattern-2.png'
import pattern3 from '../../../images/Pattern-3.png'

const MainCourse = () => {
    return (
        <div className='py-20 bg-[#0F1622] relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto'>
                <div className='flex justify-between'>
                    <div className='w-8/12 relative'>
                        <div className='flex flex-col items-center gap-5'>
                            <div className='flex items-end justify-between gap-5 w-10/12'>
                                <img className='h-[225px] w-5/12 object-cover object-center' src={img2} style={{
                                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 0%, 100% 65%, 70% 100%, 0% 100%, 0% 82.7%, 0% 0%)'
                                }} alt="" />
                                <img className='h-[275px] w-8/12 object-cover object-center -mr-10' src={img1} style={{
                                    clipPath: 'polygon(0% 0%, 76.3% 0%, 100% 37.7%, 100% 100%, 71.1% 100%, 0% 100%, 0% 82.3%, 0% 21.8%)'
                                }} alt="" />
                            </div>
                            <img className='w-full h-[300px] object-cover object-center relative z-10' src={img3} style={{
                                clipPath: 'polygon(12.2% 0%, 77.3% 0%, 100% 0%, 100% 100%, 71.9% 100%, 0% 100%, 0% 82.4%, 0% 21.4%)'
                            }} alt="" />
                        </div>
                        <img className=' absolute top-1/2 left-1/2 transform -translate-x-3/4 -translate-y-3/4 mt-1 ml-1 z-20' src={pattern3} alt="" />
                        <img className=' absolute bottom-2 -left-12 z-0 transform rotate-90 -scale-x-100' src={pattern2} alt="" />
                    </div>
                    <div className='w-4/12'>
                        <div className='px-10 py-12 bg-white relative z-20 space-y-10 -ml-12 mt-20 shadow-2xl shadow-black'>
                            <h2 className='text-4xl text-[#E3C08D] font-dancing-script font-semibold'>Main Course</h2>
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainCourse;