import React, { useEffect, useState } from 'react';
import css from './Odvp.module.scss';
import Reindeer from '@components/Odvp/01_Reindeer/Reindeer';
import MeanWise from '@components/Odvp/02_MeanWise/MeanWise';
import Balls from '@components/Odvp/03_Balls/Balls';
import Scene from '@components/Odvp/04_Scene/Scene';
import Bottom from '@components/Odvp/05_Bottom/Bottom';
import OdvbButton from '@components/Odvp/OdvbButton/OdvpButton';

const Odvp = () => {
    const [isUserScrolling, setIsUserScrolling] = useState(false);
    const [isButtonInView, setIsButtonInView] = useState(true);

    let isScrolling;

    const handleScroll = () => {
        setIsUserScrolling(true);
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            setIsUserScrolling(false);
        }, 1000);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`${css.button} ${isButtonInView || isUserScrolling ? css.button__hide : css.button__show}`}>
                <OdvbButton width={200} height={47}>
                    Créer un pot commun
                </OdvbButton>
            </div>
            <Reindeer onSetIsButtonInView={(value) => setIsButtonInView(value)} />
            <MeanWise />
            <Balls />
            <Scene />
            <Bottom onSetIsButtonInView={(value) => setIsButtonInView(value)} />
        </>
    );
};

export default Odvp;
