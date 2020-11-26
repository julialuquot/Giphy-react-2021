import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react';
import css from './Odvp.module.scss';
import smoothscroll from 'smoothscroll-polyfill';

import Reindeer from '@components/lpc/Odvp/01_Reindeer/Reindeer';
import MeanWise from '@components/lpc/Odvp/02_MeanWise/MeanWise';
import Balls from '@components/lpc/Odvp/03_Balls/Balls';
import Scene from '@components/lpc/Odvp/04_Scene/Scene';
import Bottom from '@components/lpc/Odvp/05_Bottom/Bottom';
import OdvbButton from '@components/lpc/Odvp/OdvbButton/OdvpButton';

const Odvp = () => {
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const [isButtonTopInView, setIsButtonTopInView] = useState(true);
    const [isButtonBottomInView, setIsButtonBottomInView] = useState(false);

    let isScrolling;

    const handleScroll = useCallback(() => {
        setIsUserScrolling(true);
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            setIsUserScrolling(false);
        }, 450);
    }, []);

    const handleButtonTopView = useCallback((value) => {
        setIsButtonTopInView(value);
    }, []);

    const handleButtonBottomView = useCallback((value) => {
        setIsButtonBottomInView(value);
    }, []);

    useLayoutEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    return (
        <>
            <div
                className={`${css.button} ${
                    isButtonTopInView || isButtonBottomInView || isUserScrolling ? css.button__hide : css.button__show
                }`}
            >
                <OdvbButton width={248} height={64} fontSize={16} borderRadius={50}>
                    Créer un pot commun
                </OdvbButton>
            </div>
            <Reindeer onSetIsButtonTopInView={(value) => handleButtonTopView(value)} />
            <MeanWise />
            <Balls />
            <Scene />
            <Bottom onSetIsButtonBottomInView={(value) => handleButtonBottomView(value)} />
        </>
    );
};
export default Odvp;
