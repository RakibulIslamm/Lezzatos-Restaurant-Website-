import React from 'react';
import blogImg from '../../../../images/home-images/korean-snack-foodsstreet-food-PNZRGPD-recipes.jpg'

const Recipe = () => {
    return (
        <div>
            <img className='w-full h-[250px] object-cover object-center' style={{
                clipPath: 'polygon(0% 0%, 84.5% 0%, 100% 18%, 100% 70%, 100% 100%, 0% 100%, 0% 70%, 0% 30%)'
            }} src={blogImg} alt="" />
            <div className='p-6 bg-[#182226] text-white'>
                <h2 className='text-xl font-semibold'>Kebuli Rice with tomatoes</h2>
                <p className='text-sm font-light py-2'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa... </p>
                <div>
                    <img src="" alt="" />
                    <h5 className='font-normal mt-4'>by Chef Arnold</h5>
                </div>
            </div>
        </div>
    );
};

export default Recipe;