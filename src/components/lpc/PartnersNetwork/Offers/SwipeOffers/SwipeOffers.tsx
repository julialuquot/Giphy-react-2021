import React from 'react';
import css from './SwipeOffers.module.scss';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';
import CustomSlider from '@components/common/CustomSlider/CustomSlider';

type SwipeOffersProps = {
    offers: { brand: string; category: string; desc: string; imgSrc: string }[];
};

const SwipeOffers = ({ offers }: SwipeOffersProps) => {
    const { t } = useTranslation('lpc-partners-network');

    return (
        <>
            <CustomSlider
                sliderClass={css.slider}
                nexArrowClass={css.slider__next_arrow}
                prevArrowClass={css.slider__prev_arrow}
                prevArrow={'/front-static/icons/navigation/arrow-back.svg'}
                nextArrow={'/front-static/icons/navigation/arrow-forward.svg'}
                autoplay={false}
                customArrows={true}
            >
                {offers.map((item) => {
                    return (
                        <div key={item.brand} className={css.card}>
                            <div className={css.card__img} style={{ backgroundImage: `url(${item.imgSrc})` }} />
                            <div className={css.card__txt}>
                                <div>
                                    <h4>{item.brand}</h4>
                                    <Text
                                        customClass={css.txt__category}
                                        variant={'caption_00'}
                                        color={'txt-secondary'}
                                    >
                                        {item.category}
                                    </Text>
                                    <Text variant={'body_01'} color={'txt-primary'}>
                                        {item.desc}
                                    </Text>
                                </div>
                                <Button variant={'primary_muted'}>{t('lpc-partners-network:offers.cta')}</Button>
                            </div>
                        </div>
                    );
                })}
            </CustomSlider>
        </>
    );
};

export default SwipeOffers;
