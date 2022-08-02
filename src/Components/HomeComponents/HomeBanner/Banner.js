import React from 'react';
import bannerBg from '../../../images/home-images/italian-food-background-with-ingredients-GE9A25J-BG-Section.jpg'
import indianLunch from '../../../images/home-images/indian-lunch-dinner-CLDWFXZ.jpg'
import italianFood from '../../../images/home-images/traditional-italian-cookies-with-coconut-GX2FEKM-2-902x1024.jpg'
import pattern1 from '../../../images/pattern-1.png'
import pattern2 from '../../../images/pattern-2.png'
import pattern3 from '../../../images/Pattern-3.png'

const Banner = () => {
    return (
        <div className='min-h-screen w-full bg-slate-300 bg-cover bg-center py-28 flex items-center justify-center relative z-0 overflow-hidden' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, .2), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0)),url(${bannerBg})`
        }}>
            <div className='flex justify-between items-center px-[100px] xs:px-5 sm:px-10 py-28 xs:py-10 max-w-[1920px] mx-auto'>
                <div className='flex items-center xs:items-start justify-between xs:flex-col sm:flex-col gap-20 text-white w-full'>
                    <div className='w-10/12'>
                        <h3 className='font-dancing-script text-[36px] text-[#D7B686]'>Welcome to Lezzatos</h3>
                        <h1 className='text-[50px] xs:text-[40px] leading-tight font-semibold py-3'>The Authentic<br />Restaurant & Cafe</h1>
                        <p className='text-lg font-light inline-block'>View the Menu of Lezzet Authentic Restaurant & Cafe in Swansea, UK. Share it with friends or find your next meal.</p>
                        <button className='border-2 border-[#D7B686] px-8 py-2 mt-5 text-xl hover:bg-[#d7b686] hover:text-gray-800 transition-all ease-linear'>View More</button>
                    </div>
                    <div className='relative w-6/12 xs:hidden'>
                        <div className=' ml-auto block relative w-[336px] h-[396px] bg-[#D7B686] box-border' style={{
                            clipPath: 'polygon(25% 0%, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 25%)'
                        }}>
                            <img className='absolute top-[3px] left-[3px] w-[330px] h-[390px] object-cover' style={{
                                clipPath: 'polygon(25% 0%, 100% 0, 100% 50%, 100% 100%, 0 100%, 0 25%)'
                            }} src={indianLunch} alt="" />
                        </div>


                        <div className='absolute -bottom-28 right-48 inline-block'>
                            <div className='inline-block relative w-[206px] h-[256px] bg-[#D7B686] box-border' style={{
                                clipPath: 'polygon(0 1%, 80% 1%, 100% 20%, 100% 100%, 0 100%, 0 30%)'
                            }}>
                                <img className='absolute top-[3px] left-[3px] w-[200px] h-[250px] object-cover' style={{
                                    clipPath: 'polygon(0 1%, 80% 1%, 100% 20%, 100% 100%, 0 100%, 0 30%)'
                                }} src={italianFood} alt="" />
                            </div>
                        </div>
                        <img className='-bottom-36 right-16 absolute xs:hidden' src={pattern3} alt="" />
                        <img className=' absolute -right-40 top-10 xs:hidden' src={pattern1} alt="" />
                    </div>
                </div>
            </div>
            <img className=' absolute bottom-0 left-0 xs:w-[120px]' src={pattern2} alt="" />
        </div>
    );
};

export default Banner;

// before:absolute before:w-0 before:h-0 before:border-t-[70px] before:border-t-white before:border-r-[70px] before:border-r-transparent