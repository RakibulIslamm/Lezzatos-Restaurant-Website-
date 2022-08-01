import React from 'react';
import SingleTestimonials from './SingleTestimonial/SingleTestimonial';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pattern2 from '../../../images/pattern-2.png'

const Testimonials = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true
    };

    return (
        <div className='py-20 bg-black relative'>
            <div className='px-[100px] max-w-[1920px] mx-auto text-white'>
                <div className='text-center'>
                    <h2 className='text-[#E3C08D] text-3xl font-semibold font-dancing-script py-3'>Testimonials</h2>
                    <h1 className='text-3xl font-semibold'>Customer Reviews</h1>
                    <Slider {...settings}>
                        <SingleTestimonials />
                        <SingleTestimonials />
                        <SingleTestimonials />
                        <SingleTestimonials />
                    </Slider>
                </div>
            </div>
            <img className=' absolute bottom-0 left-0 w-[150px]' src={pattern2} alt="" />
        </div>
    );
};

export default Testimonials;