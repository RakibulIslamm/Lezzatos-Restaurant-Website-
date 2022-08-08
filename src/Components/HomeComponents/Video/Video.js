import React, { useState } from 'react';
import videoThumb from '../../../images/home-images/stylish-couple-in-a-restaurant-P2DTCTZ-BG-Section.jpg'
import { IoPlayCircleOutline, IoCloseOutline } from "react-icons/io5";

const Video = () => {
    const [player, setPlayer] = useState(false);
    console.log(player);
    return (
        <div className='py-20 bg-gray-400 bg-cover bg-top transition-all ease-in-out duration-300' style={{
            backgroundImage: `${player ? 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))' : 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'}, url(${videoThumb})`
        }}>
            <div className='px-[100px] xs:px-5 sm:px-10 max-w-[1440px] h-[70vh] mx-auto flex justify-center items-center relative'>
                <button onClick={() => setPlayer(!player)} className={`${player ? 'hidden' : 'block'}`}>
                    <IoPlayCircleOutline className='text-[#E3C08D] text-[200px]' />
                </button>
                <div className={`w-full ${player ? 'block' : 'hidden'}`}>
                    <iframe className='mx-auto border border-[#E3C08D] shadow-2xl xs:w-full xs:h-60' width="80%" height="550px" src="https://www.youtube.com/embed/qzILfw634yY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
                <button onClick={() => setPlayer(!player)} className={`absolute -top-16 xs:-top-5 right-40 xs:right-5 ${player ? 'block' : 'hidden'}`}>
                    <IoCloseOutline className=' text-white text-4xl' />
                </button>
            </div>
        </div>
    );
};

export default Video;