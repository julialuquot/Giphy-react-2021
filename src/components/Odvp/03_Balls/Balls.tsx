import React, { useRef, useState, useLayoutEffect } from 'react';
import css from './Balls.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useWindowSize from '@components/Hooks/useWindowSize';
import { InView } from 'react-intersection-observer';
import Lottie from 'react-lottie';
import star1 from '../../../../public/icons/odvp/lottie/Garland - star 1.json';
import star2 from '../../../../public/icons/odvp/lottie/Garland - star 2.json';
import star3 from '../../../../public/icons/odvp/lottie/Garland - star 3.json';
import star4 from '../../../../public/icons/odvp/lottie/Garland - star 4.json';
import { S_DEVICE } from '@components/Constants';

const Balls = () => {
    const { width, height } = useWindowSize();

    const [isComponentInView, setIsComponentInView] = useState(false);

    const leftBallRef = useRef(null);
    const rightBallRef = useRef(null);
    const middleBallRef = useRef(null);

    const [scrollY, setScrollY] = useState(0);

    useScrollPosition(({ currPos }) => {
        isComponentInView && setScrollY(currPos.y);
    });

    useLayoutEffect(() => {
        if (width < S_DEVICE) {
            return;
        }

        const LEFT_BALL_BREAKPOINT = height * -2;
        const MIDDLE_BALL_BREAKPOINT = height * -2.9;
        const MIDDLE_BALL_SPEED = 1.7;
        const RIGHT_BALL_BREAKPOINT = height * -2.65;
        const RIGHT_BALL_SPEED = 1.2;

        const parallax = (distance, speed) => `translateY(${distance * speed}px)`;

        leftBallRef.current.style.transform = isComponentInView && parallax(-scrollY, 1);
        rightBallRef.current.style.transform = isComponentInView && parallax(-scrollY, RIGHT_BALL_SPEED);
        middleBallRef.current.style.transform = isComponentInView && parallax(-scrollY, MIDDLE_BALL_SPEED);

        if (scrollY < LEFT_BALL_BREAKPOINT) {
            leftBallRef.current.style.transform = isComponentInView && parallax(-LEFT_BALL_BREAKPOINT, 1);
        }

        if (scrollY < RIGHT_BALL_BREAKPOINT) {
            rightBallRef.current.style.transform =
                isComponentInView && parallax(-RIGHT_BALL_BREAKPOINT, RIGHT_BALL_SPEED);
        }

        if (scrollY < MIDDLE_BALL_BREAKPOINT) {
            middleBallRef.current.style.transform =
                isComponentInView && parallax(-MIDDLE_BALL_BREAKPOINT, MIDDLE_BALL_SPEED);
        }
    }, [height, isComponentInView, scrollY]);

    const star1Options = {
        loop: true,
        autoplay: true,
        animationData: star1,
    };
    const star2Options = {
        loop: true,
        autoplay: true,
        animationData: star2,
    };
    const star3Options = {
        loop: true,
        autoplay: true,
        animationData: star3,
    };
    const star4Options = {
        loop: true,
        autoplay: true,
        animationData: star4,
    };

    return (
        <InView onChange={setIsComponentInView}>
            <div className={css.container}>
                <img ref={middleBallRef} className={css.middleBall} src="/icons/odvp/garland_800.svg" alt="800" />
                <img
                    ref={leftBallRef}
                    className={`${css.leftBall} ${css.swing}`}
                    src="/icons/odvp/garland_400.svg"
                    alt="400"
                />
                <img ref={rightBallRef} className={css.rightBall} src="/icons/odvp/garland_x2.svg" alt="x2" />

                {isComponentInView && (
                    <>
                        <div className={css.star1}>
                            <Lottie options={star1Options} width={26} height={38} />
                        </div>
                        <div className={css.star2}>
                            <Lottie options={star2Options} width={31} height={44} />
                        </div>
                        <div className={css.star3}>
                            <Lottie options={star3Options} width={22} height={31} />
                        </div>
                        <div className={css.star4}>
                            <Lottie options={star4Options} width={44} height={64} />
                        </div>
                    </>
                )}

                <div className={css.txt}>
                    <p className={css.txt__bold}>Exemple de gain</p>
                    <p>super hooooottte à gagner !</p>
                </div>
            </div>
        </InView>
    );
};

export default Balls;
