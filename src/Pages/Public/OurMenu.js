import React from 'react';
import Appetizer from '../../Components/OurMenuComponents/Appetizer/Appetizer';
import HotPromo from '../../Components/OurMenuComponents/HotPromo/HotPromo';
import PageHeader from '../../Components/Shared/PageHeader/PageHeader';
import headerBg from '../../images/home-images/italian-food-pasta-food-background-GXK8VUE-BG-Section.jpg'

const OurMenu = () => {
    return (
        <div className='min-h-screen'>
            <PageHeader title='Our Menu' headerBg={headerBg} />
            <HotPromo />
            <Appetizer />
        </div>
    );
};

export default OurMenu;