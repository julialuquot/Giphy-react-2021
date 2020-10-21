import React, { useState, useEffect } from 'react';
import css from './MeanWise.module.scss';
import Timeline from '@components/Odvp/02_MeanWise/Timeline';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Lottie from 'react-lottie';
import { useInView } from 'react-intersection-observer';
import starsLeft from '../../../../public/icons/odvp/lottie/Doublant - Stars_leftside.json';
import starsRight from '../../../../public/icons/odvp/lottie/Doublant - Stars_rightside.json';
import wise from '../../../../public/icons/odvp/lottie/wording - sage V2.json';

const MeanWise = () => {
    const [showLottie, setShowLottie] = useState(false);
    console.log('-> showLottie', showLottie);

    const [ref, inView] = useInView({
        threshold: 1,
        delay: 250,
        triggerOnce: true,
    });

    useEffect(() => {
        inView &&
            setTimeout(function () {
                setShowLottie(true);
            }, 500);
    }, [inView]);

    useScrollPosition(({ currPos }) => {
        const item = document.getElementById('title');
        item.style.transform = `translateX(${-currPos.y * 0.2}px)`;
    }, []);

    const starsLeftOptions = {
        loop: true,
        autoplay: true,
        animationData: starsLeft,
    };

    const starsRightOptions = {
        loop: true,
        autoplay: true,
        animationData: starsRight,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const wiseOptions = {
        loop: false,
        autoplay: true,
        animationData: wise,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className={css.container}>
            <div className={css.title}>
                <h1 id={'title'}>Du 04 au 14 décembre</h1>
            </div>
            <div className={css.content}>
                <div className={css.content__text}>
                    <div className={!showLottie ? css.hide : ''}>
                        <Lottie options={wiseOptions} width={211} height={127} />
                    </div>
                    <p>
                        Parce que vous avez été très
                        <span ref={ref} className={`${css.content__bold} ${inView ? css.strike : ''}`}>
                            méchant
                        </span>
                        cette année
                    </p>
                    <p>
                        <span className={css.content__text__bold}>Le Pot Commun et Virgin Radio</span> ont décidé de
                        vous gâter en
                    </p>
                    <div className={css.content__stars}>
                        <Lottie options={starsLeftOptions} width={100} height={100} />
                        <p className={css.content__text__bold}>DOUBLANT VOS CAGNOTTES !</p>
                        <Lottie options={starsRightOptions} width={100} height={100} />
                    </div>
                </div>

                <Timeline />
            </div>
        </div>
    );
};

export default MeanWise;
