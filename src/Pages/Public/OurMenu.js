import React from 'react';
import Appetizer from '../../Components/OurMenuComponents/Appetizer/Appetizer';
import Dessert from '../../Components/OurMenuComponents/Dessert/Dessert';
import HotPromo from '../../Components/OurMenuComponents/HotPromo/HotPromo';
import IngredientsVideo from '../../Components/OurMenuComponents/IngredientsVideo/IngredientsVideo';
import MainCourse from '../../Components/OurMenuComponents/MainCourse/MainCourse';
import Newsletter from '../../Components/Shared/Newsletter/Newsletter';
import PageHeader from '../../Components/Shared/PageHeader/PageHeader';
import headerBg from '../../images/home-images/italian-food-pasta-food-background-GXK8VUE-BG-Section.jpg'

const OurMenu = () => {
    return (
        <div className='min-h-screen'>
            <PageHeader title='Our Menu' headerBg={headerBg} />
            <HotPromo />
            <Appetizer />
            <MainCourse />
            <Dessert />
            <IngredientsVideo />
            <Newsletter />
        </div>
    );
};

export default OurMenu;