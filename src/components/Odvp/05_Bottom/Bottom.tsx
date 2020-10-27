import React, { useEffect, useRef } from 'react';
import css from './Bottom.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import OdvpButton from '@components/Odvp/OdvbButton/OdvpButton';
import { useInView } from 'react-intersection-observer';
import { S_DEVICE } from '@components/Constants';
import useWindowSize from '@components/Hooks/useWindowSize';

type BottomProps = {
    onSetIsButtonInView: (boolean) => void;
};

const Bottom = ({ onSetIsButtonInView }: BottomProps) => {
    const titleRef = useRef(null);
    const [btnRef, inView] = useInView({
        threshold: 1,
    });

    const { width } = useWindowSize();

    useScrollPosition(({ currPos }) => {
        const snowflakeRight = document.getElementById('snowflakeRight');
        const snowflakeLeft = document.getElementById('snowflakeLeft');
        const rightWidthAnimation = (-currPos.y / 100) * 5.5 - 200;
        const leftWidthAnimation = (-currPos.y / 100) * 5.5 - 180;
        const scaleUp = (ratio, speed) => `${Math.round(ratio * speed)}px`;
        snowflakeRight.style.width = scaleUp(rightWidthAnimation, 3.5);
        snowflakeLeft.style.width = scaleUp(leftWidthAnimation, 4);
    }, []);

    // useScrollPosition(({ currPos }) => {
    //     titleRef.current.style.transform = `translateX(${-currPos.y * 0.2}px)`;
    // }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        inView ? onSetIsButtonInView(true) : onSetIsButtonInView(false);
    }, [inView]);

    return (
        <div className={css.container}>
            <div className={css.title}>
                {width > S_DEVICE ? (
                    <h1 ref={titleRef}>Bonne chance à tous</h1>
                ) : (
                    <h1 ref={titleRef}>
                        Bonne chance à tous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonne
                        chance à tous
                    </h1>
                )}
            </div>

            <div className={css.content}>
                <p>Alors nhésitez plus,</p>
                <p>vous navez rien à perdre,</p>
                <p>
                    <span className={css.content__bold}>tout à y gagner !</span>
                </p>
                <div ref={btnRef} className={css.cta}>
                    <OdvpButton width={200} height={47}>
                        Créer un pot commun
                    </OdvpButton>
                </div>

                <img
                    id={'snowflakeRight'}
                    className={css.snowflake_right}
                    src="/icons/odvp/snowflake_1.svg"
                    alt="snowflake"
                />
                <img
                    id={'snowflakeLeft'}
                    className={css.snowflake_left}
                    src="/icons/odvp/snowflake_2.svg"
                    alt="snowflake"
                />

                <div onClick={() => scrollToTop()} className={css.scroll}>
                    <img
                        className={css.scroll__txt}
                        src="/icons/odvp/scroll-text-up.svg"
                        alt="Remonter vers le haut de la page"
                    />
                    <img className={css.scroll__rocket} src="/icons/odvp/rocket.svg" alt="rocket" />
                </div>

                <a className={css.rules} href="/icons/odvp/pdf/Règlement_ODVP_2020.pdf">
                    Règlement du jeu
                </a>
            </div>
        </div>
    );
};

export default Bottom;
