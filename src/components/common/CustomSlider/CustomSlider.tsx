import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './CustomSlider.module.scss';

type CustomSliderProps = {
    children: React.ReactNode;
    prevArrow?: string;
    nextArrow?: string;
    prevArrowClass?: string;
    nexArrowClass?: string;
    sliderClass: string;
    autoplay?: boolean;
    dots?: boolean;
    speed?: number;
    autoplaySpeed?: number;
    slidesToShow?: number;
    customArrows?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    swipeToSlide?: number;
    slidesToScroll?: number;
    customPaging?: (index: number) => void;
    onActiveStep?: (index: number) => void;
};

const CustomSlider = ({
    children,
    prevArrow,
    nextArrow,
    prevArrowClass,
    nexArrowClass,
    sliderClass,
    autoplay,
    dots,
    speed,
    autoplaySpeed,
    slidesToShow,
    customArrows,
    focusOnSelect,
    infinite,
    swipeToSlide,
    slidesToScroll,
    customPaging,
    onActiveStep,
}: CustomSliderProps) => {
    const [index, setIndex] = useState(0);

    interface CustomArrowProps {
        onClick?: React.MouseEventHandler<any>;
    }

    useEffect(() => {
        onActiveStep(index);
    }, [index, onActiveStep]);

    // eslint-disable-next-line react/prop-types
    const SamplePrevArrow = ({ onClick }: CustomArrowProps) => {
        return (
            index !== 0 && (
                <div className={prevArrowClass} onClick={onClick}>
                    <img src={prevArrow} alt="previous" />
                </div>
            )
        );
    };

    // eslint-disable-next-line react/prop-types
    const SampleNextArrow = ({ onClick }: CustomArrowProps) => {
        return (
            index !== 2 && (
                <div className={nexArrowClass} onClick={onClick}>
                    <img src={nextArrow} alt="previous" />
                </div>
            )
        );
    };

    const afterChange = (index) => {
        return setIndex(index);
    };

    const settings = {
        className: sliderClass,
        focusOnSelect: focusOnSelect || false,
        dots: dots || false,
        infinite: infinite || true,
        autoplay: autoplay || false,
        speed: speed || 500,
        autoplaySpeed: autoplaySpeed || 3500,
        swipeToSlide: swipeToSlide || true,
        slidesToScroll: slidesToScroll || 1,
        slidesToShow: slidesToShow || 1,
        arrows: !!customArrows,
        nextArrow: customArrows ? <SampleNextArrow /> : null,
        prevArrow: customArrows ? <SamplePrevArrow /> : null,
        afterChange: (index) => afterChange(index),
        customPaging: (index) => customPaging(index),
    };

    return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
