import React from 'react';
import AboutUs from '../../Components/HomeComponents/AboutUs/AboutUs';
import DiscoverSec from '../../Components/HomeComponents/DiscoverSec/DiscoverSec';
import Banner from '../../Components/HomeComponents/HomeBanner/Banner';
import MenuDishes from '../../Components/HomeComponents/MenuDishes/MenuDishes';
import Statistic from '../../Components/HomeComponents/Statistic/Statistic';

const Home = () => {
    return (
        <div>
            <Banner />
            <DiscoverSec />
            <AboutUs />
            <Statistic />
            <MenuDishes />
        </div>
    );
};

export default Home;