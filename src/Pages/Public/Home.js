import React from 'react';
import AboutUs from '../../Components/HomeComponents/AboutUs/AboutUs';
import DiscoverSec from '../../Components/HomeComponents/DiscoverSec/DiscoverSec';
import Banner from '../../Components/HomeComponents/HomeBanner/Banner';
import MenuDishes from '../../Components/HomeComponents/MenuDishes/MenuDishes';
import Newsletter from '../../Components/HomeComponents/Newsletter/Newsletter';
import Recipes from '../../Components/HomeComponents/Recipes/Recipes';
import Reservation from '../../Components/HomeComponents/ReservationSec/Reservation';
import Statistic from '../../Components/HomeComponents/Statistic/Statistic';
import Testimonials from '../../Components/HomeComponents/Testimonials/Testimonials';
import Video from '../../Components/HomeComponents/Video/Video';

const Home = () => {
    return (
        <div>
            <Banner />
            <DiscoverSec />
            <AboutUs />
            <Statistic />
            <MenuDishes />
            <Reservation />
            <Testimonials />
            <Video />
            <Recipes />
            <Newsletter />
        </div>
    );
};

export default Home;