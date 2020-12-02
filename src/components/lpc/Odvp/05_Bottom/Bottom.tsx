import React, { useEffect, useRef, useState } from 'react';
import css from './Bottom.module.scss';
import { InView, useInView } from 'react-intersection-observer';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import OdvpButton from '@components/lpc/Odvp/OdvbButton/OdvpButton';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { S_DEVICE, XL_DEVICE } from '@components/lpc/Constants';
import Lottie from 'react-lottie';
import spark from '../../../../../public/front-static/icons/odvp/lottie/spark.json';

type BottomProps = {
    onSetIsButtonBottomInView: (boolean) => void;
};

const Bottom = ({ onSetIsButtonBottomInView }: BottomProps) => {
    const [isComponentInView, setIsComponentInView] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const titleRef = useRef(null);

    const [btnRef, inView] = useInView({
        threshold: 0,
    });

    const { width } = useWindowSize();

    const sparkOptions = {
        loop: true,
        autoplay: true,
        animationData: spark,
    };

    useScrollPosition(
        ({ currPos }) => {
            if (!isComponentInView || width < S_DEVICE) {
                return;
            }

            const scrollY = currPos.y;
            const snowflakeRight = document.getElementById('snowflakeRight');
            const snowflakeLeft = document.getElementById('snowflakeLeft');
            const ratioRight = (-scrollY / 100) * 5.5 - 180;
            const ratioLeft = (-scrollY / 100) * 5.5 - 190;
            const scaleUp = (ratio, speed) => `${Math.round(ratio * speed)}px`;

            titleRef.current.style.transform = `translateX(${-scrollY * 0.2}px)`;
            snowflakeRight.style.width = scaleUp(ratioRight, 3.5);
            snowflakeLeft.style.width = scaleUp(ratioLeft, 4);
        },
        [isComponentInView, width],
    );

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        onSetIsButtonBottomInView(inView);
    }, [inView, onSetIsButtonBottomInView]);

    const onMouseLeave = () => {
        setIsHover(false);
    };

    const onMouseEnter = () => {
        setIsHover(true);
    };

    return (
        <InView onChange={setIsComponentInView}>
            <div className={css.container}>
                <div className={css.title}>
                    {width > S_DEVICE && width < XL_DEVICE ? (
                        <h1 ref={titleRef}>Bonne chance à tous</h1>
                    ) : (
                        <h1 ref={titleRef}>
                            Bonne chance à tous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonne
                            chance à tous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonne chance
                            à tous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonne chance à
                            tous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonne chance à
                            tous&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonne chance à tous
                        </h1>
                    )}
                </div>

                <div className={css.content}>
                    <div className={css.content__text}>
                        <p>Alors n&rsquo;hésitez plus,</p>
                        <p>vous n&rsquo;avez rien à perdre,</p>
                        <p>
                            <span className={css.content__text__bold}>tout à y gagner !</span>
                        </p>
                        <div ref={btnRef} className={css.cta}>
                            <OdvpButton width={200} height={47}>
                                Créer un pot commun
                            </OdvpButton>
                        </div>
                    </div>

                    <img
                        id={'snowflakeRight'}
                        className={css.snowflake_right}
                        src="/front-static/icons/odvp/snowflake_1.svg"
                        alt="snowflake"
                    />
                    <img
                        id={'snowflakeLeft'}
                        className={css.snowflake_left}
                        src="/front-static/icons/odvp/snowflake_2.svg"
                        alt="snowflake"
                    />

                    <div
                        onMouseLeave={onMouseLeave}
                        onMouseEnter={onMouseEnter}
                        onClick={() => scrollToTop()}
                        className={css.scroll}
                    >
                        <img
                            className={css.scroll__txt}
                            src="/front-static/icons/odvp/scroll-text-up.svg"
                            alt="Remonter vers le haut de la page"
                        />
                        <img
                            className={`${css.scroll__rocket} ${isHover && css.scroll__rocket__isHover}`}
                            src="/front-static/icons/odvp/rocket-empty.svg"
                            alt="rocket"
                        />

                        {isHover && (
                            <div className={css.scroll__rocket__spark}>
                                <Lottie options={sparkOptions} width={40} height={40} />
                            </div>
                        )}
                    </div>

                    <a className={css.rules} href="/front-static/icons/odvp/pdf/Règlement_ODVP_2020.pdf">
                        Règlement du jeu
                    </a>
                </div>
            </div>
        </InView>
    );
};

export default React.memo(Bottom);
