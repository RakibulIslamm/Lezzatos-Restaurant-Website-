import React from 'react';
import OfferMenuCard from './OfferMenuCard/OfferMenuCard';

const HotPromo = () => {
    return (
        <div className='py-20 bg-[#0B0E11] relative'>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] mx-auto'>
                <h2 className='text-[#E3C08D] text-3xl font-semibold font-dancing-script py-3 text-center'>Hot Promo</h2>
                <h1 className='text-3xl font-semibold pb-3 text-center text-white'>Special Offer on Sunday</h1>
                <div className='grid grid-cols-4 gap-10 mt-10'>
                    <OfferMenuCard />
                    <OfferMenuCard />
                    <OfferMenuCard />
                    <OfferMenuCard />
                </div>
            </div>
        </div>
    );
};

export default HotPromo;