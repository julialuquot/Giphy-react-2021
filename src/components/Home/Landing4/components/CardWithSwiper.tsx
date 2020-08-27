import React, { useState } from 'react';
import Slider from 'react-slick';
import css from './CardWithSwiper.module.scss';
import SlideOne from '@components/Home/Landing4/components/SlideOne/SlideOne';
import SlideTwo from '@components/Home/Landing4/components/SlideTwo/SlideTwo';
import SlideThree from '@components/Home/Landing4/components/SlideThree/SlideThree';

const CardWithSwiper = () => {
    const [index, setIndex] = useState(0);
    interface CustomArrowProps {
        onClick?: React.MouseEventHandler<any>;
    }

    // eslint-disable-next-line react/prop-types
    const SamplePrevArrow = ({ onClick }: CustomArrowProps) => {
        return (
            index !== 0 && (
                <div className={css.slider__prev_arrow} onClick={onClick}>
                    <img src="icons/arrow-forward-white.svg" alt="arrow" />
                </div>
            )
        );
    };

    // eslint-disable-next-line react/prop-types
    const SampleNextArrow = ({ onClick }: CustomArrowProps) => {
        return (
            index !== 2 && (
                <div className={css.slider__next_arrow} onClick={onClick}>
                    <img src="icons/arrow-forward-white.svg" alt="arrow" />
                </div>
            )
        );
    };

    const afterChange = (index) => {
        return setIndex(index);
    };

    const settings = {
        className: css.slider,
        focusOnSelect: false,
        dots: true,
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: (index) => afterChange(index),
    };

    return (
        <div className={css.wrapper}>
            <Slider {...settings}>
                <SlideOne />
                <SlideTwo />
                <SlideThree />
            </Slider>
        </div>
    );
};

export default CardWithSwiper;
