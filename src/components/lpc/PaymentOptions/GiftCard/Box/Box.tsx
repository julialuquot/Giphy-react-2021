import React, { useState } from 'react';
import css from './Box.module.scss';
import Text from '@components/common/Text/Text';
import { useTranslation } from '@i18n';

const Box = () => {
    const { t } = useTranslation('lpc-gift-card');
    const [isHover, setIsHover] = useState(false);

    const onMouseLeave = () => {
        setIsHover(false);
    };

    const onMouseEnter = () => {
        setIsHover(true);
    };

    return (
        <div className={css.box}>
            <div className={css.box__left}>
                <div className={css.box__left__images}>
                    <img
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        className={css.box__left__images__box}
                        src="front-static/images/card/gift-box.png"
                        alt="gift-box"
                    />
                    <img
                        className={`${css.box__left__images__card} ${
                            isHover ? css.box__left__images__card__active : ''
                        } `}
                        src="front-static/images/card/gift-card.svg"
                        alt="gift-card"
                    />
                </div>
            </div>
            <div className={css.box__right}>
                <h2>{t('lpc-gift-card:box.title')}</h2>
                <Text customClass={css.box__right__txt} variant={'body_00'} color={'txt-primary'}>
                    {t('lpc-gift-card:box.description')}
                </Text>
            </div>
        </div>
    );
};

export default Box;
