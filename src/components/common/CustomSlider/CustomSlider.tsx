import React, { useState, createRef, useEffect } from 'react';
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
}: CustomSliderProps) => {
    const [index, setIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(null);
    const sliderRef = createRef();

    useEffect(() => {
        // eslint-disable-next-line
        const innerSlider = sliderRef.current['innerSlider'];
        setSlideCount(innerSlider.state.slideCount);
    }, [sliderRef]);

    interface CustomArrowProps {
        onClick?: React.MouseEventHandler<any>;
    }

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
            index !== slideCount - 1 && (
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
    };

    return (
        <Slider ref={sliderRef} {...settings}>
            {children}
        </Slider>
    );
};

export default CustomSlider;
