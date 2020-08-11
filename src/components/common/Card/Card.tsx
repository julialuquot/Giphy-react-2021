import React from 'react';
import css from './Card.module.scss';
import Text from '../Text/Text';

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
                    <h5>{cardTitle}</h5>
                    <h6>{cardSubtitle}</h6>
                </div>
                <Text variant={'body_00'} color={'ui-primary'} customClass={css.card__footer__text}>
                    {cardText}
                </Text>
            </div>
        </div>
    );
};

export default Card;
