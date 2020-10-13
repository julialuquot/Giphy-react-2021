import React from 'react';
import css from './Scene.module.scss';

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
        </div>
    );
};

export default Scene;
