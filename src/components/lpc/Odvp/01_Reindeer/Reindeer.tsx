import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import Link from 'next/link';
import css from './Reindeer.module.scss';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { InView, useInView } from 'react-intersection-observer';
import OdvpButton from '@components/lpc/Odvp/OdvbButton/OdvpButton';
import { S_DEVICE } from '@components/lpc/Constants';
import star1 from '../../../../../public/front-static/icons/odvp/lottie/Logo - Star 1.json';
import star2 from '../../../../../public/front-static/icons/odvp/lottie/Logo - Star 2.json';
import star3 from '../../../../../public/front-static/icons/odvp/lottie/Logo - Star 3.json';
import star4 from '../../../../../public/front-static/icons/odvp/lottie/Logo - Star 4.json';

type ReindeerProps = {
    onSetIsButtonTopInView: (boolean) => void;
};

const Reindeer = ({ onSetIsButtonTopInView }: ReindeerProps) => {
    const [isComponentInView, setIsComponentInView] = useState(true);
    const [isHover, setIsHover] = useState(false);

    const eyeLeft = useRef(null);
    const eyeRight = useRef(null);

    const { width, height } = useWindowSize();

    const [btnRef, inView] = useInView({
        threshold: 0,
    });

    const star1Options = {
        loop: true,
        autoplay: true,
        animationData: star1,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const star2Options = {
        loop: true,
        autoplay: true,
        animationData: star2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const star3Options = {
        loop: true,
        autoplay: true,
        animationData: star3,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const star4Options = {
        loop: true,
        autoplay: true,
        animationData: star4,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const handleMouseMove = (event, element) => {
        if (!element || !element.current || width < S_DEVICE || !isComponentInView) {
            return;
        }

        const item = element.current;
        const mouseX = item.getBoundingClientRect().left;
        const mouseY = item.getBoundingClientRect().top;
        const radianDegrees = Math.atan2(event.pageX - mouseX, event.pageY - mouseY);
        const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
        item.style.transform = isComponentInView && `rotate(${rotationDegrees}deg)`;
    };

    const scrollToRef = () => {
        window.scrollTo({
            top: height,
            left: 0,
            behavior: 'smooth',
        });
    };

    const onMouseLeave = () => {
        setIsHover(false);
    };

    const onMouseEnter = () => {
        setIsHover(true);
    };

    useLayoutEffect(() => {
        window.addEventListener('mousemove', function (event) {
            handleMouseMove(event, eyeLeft);
            handleMouseMove(event, eyeRight);
        });
        return () => {
            window.removeEventListener('mousemove', () => handleMouseMove);
        };
    });

    useEffect(() => {
        onSetIsButtonTopInView(inView);
    }, [inView, onSetIsButtonTopInView]);

    return (
        <InView onChange={setIsComponentInView}>
            <div className={css.container}>
                <div className={css.logo}>
                    <img
                        className={css.logo__odvp}
                        src="/front-static/icons/odvp/Logo%20OdVp%20-%20No%20star.svg"
                        alt="On double votre pot"
                    />

                    <div className={css.logo__star1}>
                        <Lottie options={star1Options} width={50} height={50} />
                    </div>
                    <div className={css.logo__star2}>
                        <Lottie options={star2Options} width={50} height={50} />
                    </div>
                    <div className={css.logo__star3}>
                        <Lottie options={star3Options} width={50} height={50} />
                    </div>
                    <div className={css.logo__star4}>
                        <Lottie options={star4Options} width={50} height={50} />
                    </div>
                </div>

                <p className={css.title}>Du 4 au 14 décembre</p>
                <div className={css.cta} ref={btnRef}>
                    <OdvpButton width={200} height={47}>
                        Créer un pot commun
                    </OdvpButton>
                </div>
                <div className={css.partnership}>
                    <p className={css.partnership__title}>En partenariat avec</p>
                    <div className={css.partnership__logo}>
                        <a href="https://www.virginradio.fr" target="_blank" rel="noreferrer">
                            <img
                                className={css.partnership__logo__virgin}
                                src="/front-static/icons/odvp/logo-virgin-radio@2x.png"
                                alt="Virgin Radio"
                            />
                        </a>
                        <span>&</span>
                        <Link href={'/'}>
                            <a>
                                <img
                                    className={css.partnership__logo__lpc}
                                    src="/front-static/icons/odvp/Logo%20-%20LPC.svg"
                                    alt="Le pot commun"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <div
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                    onClick={() => scrollToRef()}
                    className={css.scroll}
                >
                    <img
                        className={css.scroll__txt}
                        src="/front-static/icons/odvp/scroll-text-down.svg"
                        alt="Scroll pour découvrir le jeux concours"
                    />
                    <img
                        className={`${css.scroll__rocket} ${isHover && css.scroll__rocket__isHover}`}
                        src="/front-static/icons/odvp/snowflake.svg"
                        alt="rocket"
                    />
                </div>

                <div className={css.reindeer}>
                    {width > S_DEVICE ? (
                        <>
                            <img
                                className={css.reindeer__head}
                                src="/front-static/icons/odvp/Reindeer%20-%20Head.svg"
                                alt="Reindeer"
                            />
                            <div className={css.reindeer__eye}>
                                <span ref={eyeLeft} className={css.reindeer__eye__pupil} />
                                <span ref={eyeRight} className={css.reindeer__eye__pupil} />
                            </div>
                        </>
                    ) : (
                        <img
                            className={css.reindeer__head}
                            src="/front-static/icons/odvp/Reindeer%20-%20Complete.svg"
                            alt="Reindeer"
                        />
                    )}
                </div>
            </div>
        </InView>
    );
};

export default React.memo(Reindeer);
