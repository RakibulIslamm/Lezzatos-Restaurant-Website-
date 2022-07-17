import React from 'react';
import DiscoverCard from './DiscoverCard/DiscoverCard';
import foodIcon1 from '../../../images/food-icons/middle-east-food.png'
import foodIcon2 from '../../../images/food-icons/korean-food.png'
import foodIcon3 from '../../../images/food-icons/western-food.png'
import foodIcon4 from '../../../images/food-icons/chinese-food.png'
import pattern from '../../../images/Pattern-10.png'

const DiscoverSec = () => {
    const discoverData = [
        {
            name: 'Middle - East Food',
            img: foodIcon1,
            desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
            clipPath: 'polygon(9% 0, 100% 1%, 100% 75%, 92% 100%, 0 100%, 0 25%)'
        },
        {
            name: 'Korean Food',
            img: foodIcon2,
            desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
            clipPath: 'polygon(0 0, 92% 0, 100% 25%, 100% 100%, 9% 100%, 0 75%)'
        },
        {
            name: 'Western Food',
            img: foodIcon3,
            desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
            clipPath: 'polygon(0 0, 92% 0, 100% 25%, 100% 100%, 9% 100%, 0 75%)'
        },
        {
            name: 'Chinese Food',
            img: foodIcon4,
            desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,',
            clipPath: 'polygon(9% 0, 100% 1%, 100% 75%, 92% 100%, 0 100%, 0 25%)'
        }
    ]


    return (
        <div className='w-full bg-[#0B0E11] text-[#D7B686] py-20 px-[100px] relative'>
            <div className='max-w-[1920px] mx-auto'>
                <div className='text-center'>
                    <h3 className='font-dancing-script text-2xl'>Discover</h3>
                    <h1 className='text-3xl text-white font-semibold'>Our Specialist Cuisine</h1>
                </div>
                <div className=' grid grid-cols-2 gap-5 mt-16'>
                    {
                        discoverData.map(discover => <DiscoverCard discover={discover} />)
                    }
                </div>
            </div>
            <img className=' absolute right-0 top-12 w-[120px]' src={pattern} alt="" />
        </div>
    );
};

export default DiscoverSec;