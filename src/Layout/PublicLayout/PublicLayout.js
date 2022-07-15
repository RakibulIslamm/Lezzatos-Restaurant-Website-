import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';
import PublicHeader from '../../Components/Shared/Header/PublicHeader/PublicHeader';

const PublicLayout = () => {
    return (
        <>
            <PublicHeader />
            <Outlet />
            <Footer />
        </>
    );
};

export default PublicLayout;