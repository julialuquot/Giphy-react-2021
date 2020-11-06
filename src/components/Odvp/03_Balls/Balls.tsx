import React, { useRef, useState, useEffect } from 'react';
import { useLax, useLaxElement } from '../use-lax';
import css from './Balls.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useWindowSize from '@components/Hooks/useWindowSize';
import { InView, useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie';
import star1 from '../../../../public/icons/odvp/lottie/Garland - star 1.json';
import star2 from '../../../../public/icons/odvp/lottie/Garland - star 2.json';
import star3 from '../../../../public/icons/odvp/lottie/Garland - star 3.json';
import star4 from '../../../../public/icons/odvp/lottie/Garland - star 4.json';
import { S_DEVICE } from '@components/Constants';

const Balls = () => {
    const { width, height } = useWindowSize();
    // const { ref, inView, entry } = useInView({ threshold: 0.2 });
    const [attachLeftBall, setAttachLeftBall] = useState(false);
    // const [translateDownRightBall, setTranslateDownRightBall] = useState(false);
    // console.log(attachLeftBall);
    const [animationYPos, setAnimationYPos] = useState(0);
    useLax({ breakpoints: null, className: null, animationYPos });
    const rightBallRef = useLaxElement();
    const middleBallRef = useLaxElement();

    useEffect(() => {
        const rect = document.getElementById('timeline').getBoundingClientRect();
        console.log(rect);
        setAnimationYPos(rect.y);
    }, []);

    console.log('rendering');

    const leftBallRef = useRef(null);
    // const rightBallRef = useRef(null);
    // const middleBallRef = useRef(null);

    // useEffect(() => {
    //     leftBallRef.current.style.willChange = 'transform';
    //     rightBallRef.current.style.willChange = 'transform';
    //     middleBallRef.current.style.willChange = 'transform';
    // }, []);

    useScrollPosition(({ currPos }) => {
        // console.log(currPos);
        const rect = document.getElementById('gain').getBoundingClientRect();
        // console.log(rect);
        if (!attachLeftBall && rect.y < 320) {
            setAttachLeftBall(true);
        }
        if (attachLeftBall && rect.y > 320) {
            setAttachLeftBall(false);
        }

        // if (width < S_DEVICE) {
        //     return;
        // }
        // const scrollY = currPos.y;
        // const LEFT_BALL_BREAKPOINT = height * -2;
        // const MIDDLE_BALL_BREAKPOINT = height * -2.9;
        // const MIDDLE_BALL_SPEED = 1.7;
        // const RIGHT_BALL_BREAKPOINT = height * -2.65;
        // const RIGHT_BALL_SPEED = 1.2;

        // const parallax = (distance, speed) => `translateY(${distance * speed}px) translateZ(0)`;

        // leftBallRef.current.style.transform = parallax(-scrollY, 1);
        // rightBallRef.current.style.transform = parallax(-scrollY, RIGHT_BALL_SPEED);
        // middleBallRef.current.style.transform = parallax(-scrollY, MIDDLE_BALL_SPEED);

        // if (scrollY < LEFT_BALL_BREAKPOINT) {
        //     leftBallRef.current.style.transform = parallax(-LEFT_BALL_BREAKPOINT, 1);
        // }

        // if (scrollY < RIGHT_BALL_BREAKPOINT) {
        //     rightBallRef.current.style.transform = parallax(-RIGHT_BALL_BREAKPOINT, RIGHT_BALL_SPEED);
        // }

        // if (scrollY < MIDDLE_BALL_BREAKPOINT) {
        //     middleBallRef.current.style.transform = parallax(-MIDDLE_BALL_BREAKPOINT, MIDDLE_BALL_SPEED);
        // }
    });

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
        <div id="gain" className={css.container}>
            <img
                data-lax-translate-y={`${animationYPos + 100} 0,${animationYPos + 100} 0,${
                    animationYPos + 500
                } 1000 | speed=0,8 `}
                ref={middleBallRef}
                className={`${css.middleBall} lax`}
                src="/icons/odvp/garland_800.svg"
                alt="800"
            />
            <img
                ref={leftBallRef}
                className={`${attachLeftBall ? css.leftBall__attach : css.leftBall}`}
                src="/icons/odvp/garland_400.svg"
                alt="400"
            />
            <img
                id="right"
                ref={rightBallRef}
                className={`${css.rightBall} lax`}
                data-lax-translate-y={`${animationYPos} 0,${animationYPos} 0,${animationYPos + 300} 600 | speed=0,5 `} // "1940 0, 1940 0, 2200 600 | speed=0,5 "
                src="/icons/odvp/garland_x2.svg"
                alt="x2"
            />

            {/* {isComponentInView && ( */}
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
            {/* )} */}

            <div className={css.txt}>
                <p className={css.txt__bold}>Exemple de gain</p>
                <p>super hooooottte à gagner !</p>
            </div>
        </div>
    );
};

export default Balls;
