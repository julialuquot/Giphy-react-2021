import React, { useState, useEffect } from 'react';
import css from './MeanWise.module.scss';
import Timeline from '@components/Odvp/02_MeanWise/Timeline';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Lottie from 'react-lottie';
import { useInView } from 'react-intersection-observer';
import starsLeft from '../../../../public/icons/odvp/lottie/Doublant - Stars_leftside.json';
import starsRight from '../../../../public/icons/odvp/lottie/Doublant - Stars_rightside.json';
import wise from '../../../../public/icons/odvp/lottie/wording - sage V2.json';
import useWindowSize from '@components/Hooks/useWindowSize';
import { S_DEVICE } from '@components/Constants';

const MeanWise = () => {
    const [showLottie, setShowLottie] = useState(false);
    const { width } = useWindowSize();
    const [ref, inView] = useInView({
        threshold: 1,
        delay: 250,
        triggerOnce: true,
    });

    useEffect(() => {
        inView &&
            setTimeout(function () {
                setShowLottie(true);
            }, 800);
    }, [inView]);

    useScrollPosition(
        ({ currPos }) => {
            const item = document.getElementById('title');
            if (width > S_DEVICE) {
                item.style.transform = `translateX(${-currPos.y * 0.2}px)`;
            }
        },
        [width],
    );

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
            {width > S_DEVICE ? (
                <div className={css.title}>
                    <h1 id={'title'}>Du 04 au 14 décembre</h1>
                </div>
            ) : (
                <div className={css.title}>
                    <h1 id={'title'}>
                        Du 04 au 14 décembre&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Du 04 au
                        14 décembre
                    </h1>
                </div>
            )}

            <div className={css.content}>
                <div className={css.content__text}>
                    <div className={`${css.lottie} ${!showLottie ? css.lottie__hide : ''}`}>
                        <Lottie options={wiseOptions} width={211} height={127} />
                    </div>

                    <p>
                        Parce que vous avez été très
                        <span
                            ref={ref}
                            className={`${css.content__text__bold} ${css.content__text__mean} ${
                                inView ? css.strike : ''
                            }`}
                        >
                            méchant
                        </span>
                        cette année
                    </p>
                    <p>
                        <span className={css.content__text__bold}>Le Pot Commun et Virgin Radio</span> ont décidé de
                        vous gâter en
                    </p>

                    <div className={css.content__stars}>
                        <div className={css.content__stars__icon}>
                            <Lottie options={starsLeftOptions} width={100} height={100} />
                        </div>
                        <p className={css.content__text__bold}>DOUBLANT VOS CAGNOTTES !</p>
                        <div className={css.content__stars__icon}>
                            <Lottie options={starsRightOptions} width={100} height={100} />{' '}
                        </div>
                    </div>
                </div>

                <Timeline />
            </div>
        </div>
    );
};

export default MeanWise;
