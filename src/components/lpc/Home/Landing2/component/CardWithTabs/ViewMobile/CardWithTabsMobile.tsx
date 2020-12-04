import React from 'react';
import Slider from 'react-slick';
import css from './CardWithTabsMobile.module.scss';
import Slide from './components/Slide/Slide';

type CardWithTabsMobileProps = {
    cardInfo: any[];
};

const CardWithTabsMobile = ({ cardInfo }: CardWithTabsMobileProps) => {
    const settings = {
        className: css.slider,
        arrows: false,
        focusOnSelect: false,
        dots: true,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={css.wrapper}>
            <Slider {...settings}>
                {cardInfo.map((card) => (
                    <Slide key={card.tabId} card={card} />
                ))}
            </Slider>
        </div>
    );
};

export default CardWithTabsMobile;
