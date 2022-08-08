import React from 'react';
import aboutImg1 from '../../../images/home-images/caffee-restaurant-P6YK3VW-680x1024.jpg'
import aboutImg2 from '../../../images/home-images/caffee-restaurant-PTSGQEZ-680x1024.jpg'

const AboutUs = () => {
    return (
        <div className='py-20 bg-[#0D1518]'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto'>
                <div className='grid grid-cols-3 xs:grid-cols-1 gap-6 relative'>
                    <img className='mt-20 xs:hidden' style={{
                        clipPath: 'polygon(0 0, 83% 0, 100% 12%, 100% 100%, 0 100%, 0 75%)'
                    }} src={aboutImg1} alt="" />
                    <img style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 12%, 100% 100%, 20% 100%, 0 89%)'
                    }} src={aboutImg2} alt="" />
                    <div className='relative'>
                        <div className='bg-white p-16 xs:p-8 absolute bottom-0 xs:bottom-24 -left-40 xs:left-0 shadow-2xl' style={{
                            clipPath: 'polygon(0 0, 85% 0, 100% 25%, 100% 100%, 0 100%, 0% 45%)'
                        }}>
                            <h3 className=' font-dancing-script text-2xl'>About Us</h3>
                            <h2 className='text-2xl font-semibold py-3'>Our Story Make History</h2>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste temporibus id odit beatae sapiente minus totam quia accusantium laborum iure.</p>
                            <button className='pt-3'>Read More &#8594;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;