import React from 'react';
import SingleMenu2 from '../../HomeComponents/MenuDishes/SingleMenu/SingleMenu2';
import foodImg1 from '../../../images/home-images/italian-food-pasta-food-background-GXK8VUE.jpg'
import foodImg2 from '../../../images/home-images/salad-45DBF7S.jpg'
import foodImg3 from '../../../images/home-images/traditional-italian-cookies-with-coconut-GX2FEKM-2-902x1024.jpg'

const Appetizer = () => {
    return (
        <div className='py-20 bg-[#0D1518] relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1920px] mx-auto'>

                <div className='flex justify-between items-start gap-5'>
                    <div className='relative w-4/12'>
                        <div className='px-10 py-12 bg-white relative -mr-24 mt-24 z-20 space-y-10'>
                            <h2 className='text-4xl font-dancing-script font-semibold'>Appetizer</h2>
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                        </div>
                    </div>
                    <div className='flex items-end justify-between gap-5 w-8/12'>
                        <div className='space-y-5 w-full'>
                            <img className='w-[415px] h-[335px] object-cover' src={foodImg1} style={{
                                clipPath: 'polygon(15.3% 0%, 84.8% 0%, 100% 20.3%, 100% 100%, 84.8% 100%, 15.3% 100%, 0% 100%, 0% 0%)'
                            }} alt="" />
                            <img className='w-[415px] h-[280px] object-cover' src={foodImg3} style={{
                                clipPath: 'polygon(15.3% 0%, 84.8% 0%, 100% 0%, 100% 76%, 84.8% 100%, 15.3% 100%, 0% 100%, 0% 0%)'
                            }} alt="" />
                        </div>
                        <div className='w-full'>
                            <img className='w-[400px] h-[500px] object-cover' src={foodImg2} style={{
                                clipPath: 'polygon(18.7% 0%, 83.4% 0%, 100% 0%, 100% 100%, 83.4% 100%, 16.6% 100%, 0% 100%, 0% 15.5%)'
                            }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appetizer;