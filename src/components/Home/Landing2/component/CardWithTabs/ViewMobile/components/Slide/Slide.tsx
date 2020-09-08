import React from 'react';
import css from './Slide.module.scss';
import Text from '@components/common/Text/Text';
import { withTranslation } from '@i18n';

type SlideOneProps = {
    card: { title: string; text: string; cardImg: string };
};

const namespacesRequired = ['home-page'];

const SlideOne = ({ card }: SlideOneProps) => {
    const slideStyle = {
        backgroundImage: `url(${card.cardImg})`,
    };

    return (
        <div className={css.slide} style={slideStyle}>
            <h2>{card.title}</h2>
            <Text color={'white'} variant={'body_01'}>
                {card.text}
            </Text>
        </div>
    );
};
export default withTranslation(namespacesRequired)(SlideOne);
