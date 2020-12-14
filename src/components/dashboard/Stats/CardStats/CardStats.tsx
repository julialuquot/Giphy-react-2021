import React from 'react';
import css from './CardStats.module.scss';

type CardsStatsProps = {
    title: string;
    imgScr: string;
    stats: number;
};

const CardStats = ({ title, imgScr, stats }: CardsStatsProps) => {
    return (
        <div className={css.card}>
            <div className={css.card__header}>
                <h2>{stats}</h2>
                <img src={imgScr} alt={title} />
            </div>

            <h6>{title}</h6>
        </div>
    );
};

export default CardStats;
