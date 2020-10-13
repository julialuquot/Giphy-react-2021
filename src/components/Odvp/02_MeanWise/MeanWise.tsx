import React, { useState } from 'react';
import css from './MeanWise.module.scss';
import Timeline from '@components/Odvp/02_MeanWise/Timeline';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const MeanWise = () => {
    useScrollPosition(({ currPos }) => {
        const item = document.getElementById('title');
        item.style.transform = `translateX(${-currPos.y * 0.2}px)`;
    }, []);

    return (
        <div className={css.container}>
            <div className={css.title}>
                <h1 id={'title'}>Du 04 au 14 décembre</h1>
            </div>

            <div className={css.content}>
                <div className={css.content__text}>
                    <p>
                        Parce que vous avez été très <span className={`${css.content__bold}`}>méchant </span>
                        cette année
                    </p>
                    <p>
                        <span className={css.content__text__bold}>Le Pot Commun et Virgin Radio</span> ont décidé de
                        vous gâter en
                    </p>

                    <div className={css.content__stars}>
                        <img src="/icons/odvp/star_left.svg" alt="stars" />
                        <p className={css.content__text__bold}>DOUBLANT VOS CAGNOTTES !</p>
                        <img src="/icons/odvp/star_right.svg" alt="stars" />
                    </div>
                </div>

                <Timeline />
            </div>
        </div>
    );
};

export default MeanWise;
