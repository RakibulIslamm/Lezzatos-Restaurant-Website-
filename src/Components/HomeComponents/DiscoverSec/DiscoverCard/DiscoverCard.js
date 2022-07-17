import React from 'react';

const DiscoverCard = ({ discover }) => {
    const { name, img, desc, clipPath } = discover;
    return (
        <div className='bg-[#182226] p-12 flex items-start gap-3' style={{
            clipPath: clipPath
        }}>
            <img src={img} alt="" />
            <div>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p className='text-sm font-light'>{desc}</p>
            </div>
        </div>
    );
};

export default DiscoverCard;