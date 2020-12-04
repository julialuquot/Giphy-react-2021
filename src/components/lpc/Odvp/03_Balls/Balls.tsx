import React, { useRef, useState, useEffect } from 'react';
import { useLax, useLaxElement } from '../use-lax';
import css from './Balls.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Lottie from 'react-lottie';
import star1 from '../../../../../public/front-static/icons/odvp/lottie/Garland - star 1.json';
import star2 from '../../../../../public/front-static/icons/odvp/lottie/Garland - star 2.json';
import star3 from '../../../../../public/front-static/icons/odvp/lottie/Garland - star 3.json';
import star4 from '../../../../../public/front-static/icons/odvp/lottie/Garland - star 4.json';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { S_DEVICE } from '@components/lpc/Constants';

const Balls = () => {
    const [attachLeftBall, setAttachLeftBall] = useState(false);
    const [animationYPos, setAnimationYPos] = useState(0);

    const leftBallRef = useRef(null);
    const rightBallRef = useLaxElement();
    const middleBallRef = useLaxElement();

    useLax({ breakpoints: null, className: null, animationYPos });
    const { width } = useWindowSize();

    useEffect(() => {
        window.onbeforeunload = () => window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (width > S_DEVICE) {
            const rect = document.getElementById('timeline').getBoundingClientRect();
            setAnimationYPos(rect.y);
        }
    }, [width]);

    useScrollPosition(() => {
        if (width > S_DEVICE) {
            const rect = document.getElementById('container').getBoundingClientRect();
            if (!attachLeftBall && rect.y < 320) {
                setAttachLeftBall(true);
            }
            if (attachLeftBall && rect.y > 320) {
                setAttachLeftBall(false);
            }
        }
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
        <div id="container" className={css.container}>
            <img
                data-lax-translate-y={`${animationYPos + 100} 0,${animationYPos + 100} 0,${
                    animationYPos + 500
                } 1000 | speed=0,8 `}
                ref={middleBallRef}
                className={`${css.middleBall} lax`}
                src="/front-static/icons/odvp/garland_800.svg"
                alt="800"
            />
            <img
                ref={leftBallRef}
                className={`${css.leftBall} ${(attachLeftBall || width < S_DEVICE) && css.leftBall__attach}`}
                src="/front-static/icons/odvp/garland_400.svg"
                alt="400"
            />
            <img
                id="right"
                ref={rightBallRef}
                className={`${css.rightBall} lax`}
                data-lax-translate-y={`${animationYPos} 0,${animationYPos} 0,${animationYPos + 300} 600 | speed=0,5`} // "1940 0, 1940 0, 2200 600 | speed=0,5 "
                src="/front-static/icons/odvp/garland_x2.svg"
                alt="x2"
            />

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

            <div className={css.txt}>
                <p className={css.txt__bold}>Exemple de gain</p>
                <p>super hooooottte à gagner !</p>
            </div>
        </div>
    );
};

export default Balls;
