import React, { useState } from 'react';
import css from './SwipeOffers.module.scss';
import Slider from 'react-slick';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import { useTranslation } from '@i18n';

type SwipeOffersProps = {
    offers: { brand: string; category: string; desc: string; imgSrc: string }[];
};

const SwipeOffers = ({ offers }: SwipeOffersProps) => {
    const { t } = useTranslation('lpc-partners-network');

    const [index, setIndex] = useState(0);

    interface CustomArrowProps {
        onClick?: React.MouseEventHandler<any>;
    }

    // eslint-disable-next-line react/prop-types
    const SamplePrevArrow = ({ onClick }: CustomArrowProps) => {
        return (
            index !== 0 && (
                <div className={css.slider__prev_arrow} onClick={onClick}>
                    <img src="/front-static/icons/navigation/arrow-back.svg" alt="previous" />
                </div>
            )
        );
    };

    // eslint-disable-next-line react/prop-types
    const SampleNextArrow = ({ onClick }: CustomArrowProps) => {
        return (
            index !== 2 && (
                <div className={css.slider__next_arrow} onClick={onClick}>
                    <img src="/front-static/icons/navigation/arrow-forward.svg" alt="next" />
                </div>
            )
        );
    };

    const afterChange = (index) => {
        return setIndex(index);
    };

    const settings = {
        className: css.slider,
        autoplay: true,
        focusOnSelect: false,
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3500,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (index) => afterChange(index),
    };

    return (
        <>
            <Slider {...settings}>
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
            </Slider>
        </>
    );
};

export default SwipeOffers;
