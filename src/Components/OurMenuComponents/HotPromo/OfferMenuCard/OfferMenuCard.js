import React from 'react';
import food from '../../../../images/home-images/korean-snack-foodsstreet-food-PNZRGPD-recipes.jpg'

const OfferMenuCard = () => {
    return (
        <>
            <style jsx>
                {`
            .order-parent:hover .order-btn{
                visibility: visible;
            }
        `}
            </style>
            <div>
                <div className='relative order-parent'>
                    <img className='relative z-0 h-[250px] w-[250px] object-cover' src={food} style={{
                        clipPath: 'polygon(0% 0%, 77.9% 0%, 100% 22.1%, 100% 84.7%, 100% 100%, 0% 100%, 0% 84.7%, 0% 15.3%)'
                    }} alt="" />
                    <span className='absolute px-3 py-1 text-white bg-[#F8BE69] inline-block top-3 left-0'>50% off</span>
                    <div className='absolute w-[250px] h-[250px] bg-[#F8BE69] bg-opacity-50 z-10 top-0 flex justify-center items-center order-btn invisible' style={{
                        clipPath: 'polygon(0% 0%, 77.9% 0%, 100% 22.1%, 100% 84.7%, 100% 100%, 0% 100%, 0% 84.7%, 0% 15.3%)'
                    }}>
                        <button className='px-5 py-2 border border-white text-white hover:bg-slate-800'>Order Now</button>
                    </div>
                </div>
                <h2 className='text-[20px] text-white font-semibold mt-4 text-center'>Korean Spicy Soup</h2>
                <h3 className='text-[20px] text-[#F8BE69] font-semibold mt-2 text-center'>$<span>18</span></h3>
            </div>
        </>
    );
};

export default OfferMenuCard;