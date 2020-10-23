import React from 'react';
import css from './Scene.module.scss';
import Lottie from 'react-lottie';
import cat from '../../../../public/icons/odvp/lottie/Cat.json';

const catOptions = {
    loop: true,
    autoplay: true,
    animationData: cat,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

const Scene = () => {
    return (
        <div className={css.scene}>
            <div className={css.scene__text}>
                <p>
                    <span className={css.scene__text__bold}>18 décembre,</span> un tirage au sort sera effectué parmi
                    <span className={css.scene__text__bold}> tous les pots créés</span> pour élire
                    <span className={css.scene__text__bold}> les heureux gagnants !</span>
                </p>
            </div>
            <figure className={css.scene__cat}>
                <Lottie options={catOptions} width={211} height={224} />
            </figure>
        </div>
    );
};

export default Scene;
