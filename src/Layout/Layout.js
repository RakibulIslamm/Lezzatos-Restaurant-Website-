import React from 'react';
import PublicLayout from './PublicLayout/PublicLayout';
import Home from '../Pages/Public/Home';
import { Route, Routes } from 'react-router-dom';
import OurMenu from '../Pages/Public/OurMenu';

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<Home />} />
                    <Route path='our-menu' element={<OurMenu />} />
                </Route>
            </Routes>
        </>
    );
};

export default Layout;