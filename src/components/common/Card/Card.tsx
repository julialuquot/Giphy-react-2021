import React from 'react';
import css from './Card.module.scss';
import Text from '../Text/Text';
import Link from 'next/link';

type CardProps = {
    cardImg: string;
    cardColor: string;
    cardTitle: string;
    cardSubtitle: string;
    cardText: string;
    uniq: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card = ({ cardImg, cardColor, cardTitle, cardSubtitle, cardText, uniq }: CardProps) => {
    const headerStyle = {
        backgroundColor: cardColor,
    };
    return (
        <Link href={'/#'}>
            <a className={css.card}>
                <div className={css.card__header} style={headerStyle}>
                    <img className={css.card__header__img} src={cardImg} alt={cardTitle} />
                </div>
                <div className={css.card__footer}>
                    <div className={css.card__footer__top}>
                        <h5>{cardTitle}</h5>
                        <Text variant={'caption__00'} color={'ui-secondary'}>
                            {cardSubtitle}
                        </Text>
                    </div>
                    <Text variant={'body_00'} color={'txt-primary'} customClass={css.card__footer__text}>
                        {cardText}
                    </Text>
                </div>
            </a>
        </Link>
    );
};

export default Card;
