import React from 'react';
import css from './CardList.module.scss';
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
const CardList = ({ cardImg, cardColor, cardTitle, cardSubtitle, cardText, uniq }: CardProps) => {
    const leftStyle = {
        backgroundColor: cardColor,
    };
    return (
        <Link href={'/#'}>
            <a className={css.card}>
                <div className={css.card__left} style={leftStyle}>
                    <img src={cardImg} alt={cardTitle} />
                </div>
                <div className={css.card__right}>
                    <h5>{cardTitle}</h5>
                    <Text variant={'caption__00'} color={'ui-secondary'}>
                        {cardSubtitle}
                    </Text>
                    <Text variant={'body_00'} color={'txt-primary'} customClass={css.card__text}>
                        {cardText}
                    </Text>
                </div>
            </a>
        </Link>
    );
};

export default CardList;
