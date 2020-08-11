import React from 'react';
import css from './Card.module.scss';

type CardProps = {
    cardImg: string;
    cardColor: string;
    cardTitle: string;
    cardSubtitle: string;
    cardText: string;
};

const Card = ({ cardImg, cardColor, cardTitle, cardSubtitle, cardText }: CardProps) => {
    return (
        <div className={css.card}>
            <div className={`${css.card__header} ${css[cardColor]}`}>
                <img className={css.card__header__img} src={cardImg} alt={cardTitle} />
            </div>
            <div className={css.card__footer}>
                <div className={css.card__footer__top}>
                    <span className={css.card__footer__top__title}>{cardTitle}</span>
                    <span className={css.card__footer__top__subtitle}>{cardSubtitle}</span>
                </div>
                <span className={css.card__footer__text}>{cardText}</span>
            </div>
        </div>
    );
};

export default Card;
