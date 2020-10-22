import React, { useRef } from 'react';
import css from './Bottom.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import OdvpButton from '@components/Odvp/OdvbButton/OdvpButton';

const Bottom = () => {
    const titleRef = useRef(null);
    const snowflakeRight = useRef(null);

    useScrollPosition(({ currPos }) => {
        titleRef.current.style.transform = `translateX(${-currPos.y * 0.2}px)`;
        const scaleAmt = 0.11 + -currPos.y / 4000;
        snowflakeRight.current.style.transform = `scale(${scaleAmt})`;
    }, []);

    const scrollToRef = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

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
                <div className={css.cta}>
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

                <div onClick={() => scrollToRef()} className={css.scroll}>
                    <img
                        className={css.scroll__txt}
                        src="/icons/odvp/scroll-text-up.svg"
                        alt="Remonter vers le haut de la page"
                    />
                    <img className={css.scroll__rocket} src="/icons/odvp/rocket.svg" alt="rocket" />
                </div>

                <p className={css.rules}>Règlement du jeu</p>
            </div>
        </div>
    );
};

export default Bottom;
