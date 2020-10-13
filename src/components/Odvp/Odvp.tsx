import React, { useState } from 'react';
import css from './Odvp.module.scss';
import Nav from '@components/Odvp/Nav/Nav';
import Reindeer from '@components/Odvp/01_Reindeer/Reindeer';
import MeanWise from '@components/Odvp/02_MeanWise/MeanWise';
import Balls from '@components/Odvp/03_Balls/Balls';
import Scene from '@components/Odvp/04_Scene/Scene';
import Bottom from '@components/Odvp/05_Bottom/Bottom';

const Odvp = () => {
    const [showNavOnScroll, setShowNavOnScroll] = useState(false);

    return (
        <>
            {/* <Nav isVisible={showNavOnScroll} /> */}
            <Reindeer onShowNavBar={(value) => setShowNavOnScroll(value)} />
            <MeanWise />
            <Balls />
            <Scene />
            <Bottom />
        </>
    );
};

export default Odvp;
