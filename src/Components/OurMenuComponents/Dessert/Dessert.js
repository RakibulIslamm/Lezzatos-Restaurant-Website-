import React from 'react';
import SingleMenu2 from '../../HomeComponents/MenuDishes/SingleMenu/SingleMenu2';
import img1 from '../../../images/home-images/raw-meat-with-ingredients-for-cooking-PWHM492-recipes.jpg'
import img2 from '../../../images/home-images/italian-food-shrimp-spaghetti-pasta-with-tomato-sa-B2RRCGR-recipes.jpg'
import img3 from '../../../images/home-images/indian-lunch-dinner-CLDWFXZ.jpg'

const Dessert = () => {
    return (
        <div className='py-20 bg-[#0D1518] relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto'>
                <div className='flex justify-between'>
                    <div className='w-4/12'>
                        <div className='px-10 py-12 bg-white relative z-20 space-y-10 -mr-12 mt-20 shadow-2xl shadow-black'>
                            <h2 className='text-4xl text-[#E3C08D] font-dancing-script font-semibold'>Dessert</h2>
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                            <SingleMenu2 />
                        </div>
                    </div>

                    <div className='w-8/12'>
                        <div className='flex flex-col items-center gap-5'>
                            <img className='w-full h-[300px] object-cover object-center -ml-20' src={img3} style={{
                                clipPath: 'polygon(15% 0%, 87% 0%, 100% 28.3%, 100% 100%, 85% 100%, 15% 100%, 0% 100%, 0% 0%)'
                            }} alt="" />
                            <div className='flex items-start justify-between gap-5 w-10/12 -ml-10'>
                                <img className='h-[225px] w-5/12 object-cover object-center' src={img2} style={{
                                    clipPath: 'polygon(24.4% 0%, 77.3% 0%, 100% 0%, 100% 66.3%, 71.9% 100%, 0% 100%, 0% 82.7%, 0% 0%)'
                                }} alt="" />
                                <img className='h-[275px] w-8/12 object-cover object-center' src={img1} style={{
                                    clipPath: 'polygon(20.5% 0%, 100% 0%, 100% 28.3%, 100% 100%, 84.7% 100%, 15.3% 100%, 0% 100%, 0% 25.8%)'
                                }} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Dessert;