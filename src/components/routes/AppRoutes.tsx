import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import {lazy, Suspense} from "react";

const Home = lazy(() => import("../../pages/Home/Home"));
const Flexbox = lazy(() => import("../../pages/Flexbox/FlexboxLayouts"));
const Grid = lazy(() => import("../../pages/Grid/GridLayouts"));

const AppRoutes = () => {
    const location = useLocation();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/grid" element={<Grid/>}/>
                <Route path="/flexbox" element={<Flexbox/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
