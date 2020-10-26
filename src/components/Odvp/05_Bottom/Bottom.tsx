import React, { useEffect, useRef } from 'react';
import css from './Bottom.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import OdvpButton from '@components/Odvp/OdvbButton/OdvpButton';
import { useInView } from 'react-intersection-observer';

type BottomProps = {
    onSetIsButtonInView: (boolean) => void;
};

const Bottom = ({ onSetIsButtonInView }: BottomProps) => {
    const titleRef = useRef(null);
    const snowflakeRight = useRef(null);
    const [btnRef, inView] = useInView({
        threshold: 1,
    });

    useScrollPosition(({ currPos }) => {
        titleRef.current.style.transform = `translateX(${-currPos.y * 0.2}px)`;
        const scaleAmt = 0.11 + -currPos.y / 4000;
        snowflakeRight.current.style.transform = `scale(${scaleAmt})`;
    }, []);

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
                <h1 ref={titleRef}>Bonne chance à tous</h1>
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
                    ref={snowflakeRight}
                    className={css.snowflake_right}
                    src="/icons/odvp/snowflake_1.svg"
                    alt="snowflake"
                />
                <img className={css.snowflake_left} src="/icons/odvp/snowflake_2.svg" alt="snowflake" />

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
