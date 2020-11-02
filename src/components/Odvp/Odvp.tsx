import React, { useLayoutEffect, useState, useCallback } from 'react';
import css from './Odvp.module.scss';
import Reindeer from '@components/Odvp/01_Reindeer/Reindeer';
import MeanWise from '@components/Odvp/02_MeanWise/MeanWise';
import Balls from '@components/Odvp/03_Balls/Balls';
import Scene from '@components/Odvp/04_Scene/Scene';
import Bottom from '@components/Odvp/05_Bottom/Bottom';
import OdvbButton from '@components/Odvp/OdvbButton/OdvpButton';

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
        }, 1500);
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

    return (
        <>
            <div
                className={`${css.button} ${
                    isButtonTopInView || isButtonBottomInView || isUserScrolling ? css.button__hide : css.button__show
                }`}
            >
                <OdvbButton width={200} height={47}>
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
