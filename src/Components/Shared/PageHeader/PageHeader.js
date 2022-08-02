import React from 'react';
import pattern1 from '../../../images/pattern-1.png'
import pattern2 from '../../../images/pattern-2.png'

const PageHeader = ({ title, headerBg }) => {
    return (
        <div className='h-[50vh] w-full bg-slate-300 bg-cover bg-center py-28 flex items-center justify-center relative z-0 overflow-hidden' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)),url(${headerBg})`
        }}>

            <h1 className='relative top-10 text-white text-4xl font-semibold tracking-widest'>{title}</h1>

            <img className=' absolute bottom-0 left-0 w-[130px]' src={pattern2} alt="" />
            <img className=' absolute top-1/2 transform -translate-y-1/2 right-0 w-[130px]' src={pattern1} alt="" />
        </div>
    );
};

export default PageHeader;