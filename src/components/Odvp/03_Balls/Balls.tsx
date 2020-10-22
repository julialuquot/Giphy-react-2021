import React, { useRef } from 'react';
import css from './Balls.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import useWindowSize from '@components/Hooks/useWindowSize';

const Balls = () => {
    const { height } = useWindowSize();

    const leftBallRef = useRef(null);
    const rightBallRef = useRef(null);
    const middleBallRef = useRef(null);

    useScrollPosition(
        ({ currPos }) => {
            const scrollY = currPos.y;

            const LEFT_BALL_BREAKPOINT = height * -2;
            //
            const MIDDLE_BALL_BREAKPOINT = height * -2.9;
            const MIDDLE_BALL_SPEED = 1.7;
            //
            const RIGHT_BALL_BREAKPOINT = height * -2.65;
            const RIGHT_BALL_SPEED = 1.2;
            //

            const parallax = (distance, speed) => `translateY(${distance * speed}px)`;

            leftBallRef.current.style.transform = parallax(-scrollY, 1);
            rightBallRef.current.style.transform = parallax(-scrollY, RIGHT_BALL_SPEED);
            middleBallRef.current.style.transform = parallax(-scrollY, MIDDLE_BALL_SPEED);

            if (scrollY < LEFT_BALL_BREAKPOINT) {
                leftBallRef.current.style.transform = parallax(-LEFT_BALL_BREAKPOINT, 1);
            }

            if (scrollY < RIGHT_BALL_BREAKPOINT) {
                rightBallRef.current.style.transform = parallax(-RIGHT_BALL_BREAKPOINT, RIGHT_BALL_SPEED);
            }

            if (scrollY < MIDDLE_BALL_BREAKPOINT) {
                middleBallRef.current.style.transform = parallax(-MIDDLE_BALL_BREAKPOINT, MIDDLE_BALL_SPEED);
            }
        },
        [height],
    );

    return (
        <div className={css.container}>
            <img ref={middleBallRef} className={css.middleBall} src="/icons/odvp/garland_800.svg" alt="800" />
            <img
                ref={leftBallRef}
                className={`${css.leftBall} ${css.swing}`}
                src="/icons/odvp/garland_400.svg"
                alt="400"
            />
            <img ref={rightBallRef} className={css.rightBall} src="/icons/odvp/garland_x2.svg" alt="x2" />

            <div className={css.txt}>
                <p>Exemple de gain</p>
                <p>super hooooottte à gagner !</p>
            </div>
        </div>
    );
};

export default Balls;
