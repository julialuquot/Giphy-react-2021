import React from 'react';
import css from './SimpleCard.module.scss';

type CardWithTabProps = {
    title: string;
    text: string;
    cardImg: string;
};

const SimpleCard = ({ title, text, cardImg }: CardWithTabProps) => {
    return (
        <div className={css.card} style={{ backgroundImage: `url(${cardImg})` }}>
            <div className={css.card__title}>
                <h3>{title}</h3>
                <h6>{text}</h6>
            </div>
        </div>
    );
};

export default SimpleCard;
