import React, { useEffect } from 'react';
import css from './Reindeer.module.scss';
import useWindowSize from '@components/Hooks/useWindowSize';
import { useInView } from 'react-intersection-observer';
import Lottie from 'react-lottie';
import OdvpButton from '@components/Odvp/OdvbButton/OdvpButton';
import star1 from '../../../../public/icons/odvp/lottie/Logo - Star 1.json';
import star2 from '../../../../public/icons/odvp/lottie/Logo - Star 2.json';
import star3 from '../../../../public/icons/odvp/lottie/Logo - Star 3.json';
import star4 from '../../../../public/icons/odvp/lottie/Logo - Star 4.json';

type ReindeerProps = {
    onSetIsButtonInView: (boolean) => void;
};

const Reindeer = ({ onSetIsButtonInView }: ReindeerProps) => {
    const { height } = useWindowSize();

    const [btnRef, inView] = useInView({
        threshold: 1,
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
        const item = document.getElementById(element);
        const mouseX = item.getBoundingClientRect().left;
        const mouseY = item.getBoundingClientRect().top;
        const radianDegrees = Math.atan2(event.pageX - mouseX, event.pageY - mouseY);
        const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
        item.style.transform = `rotate(${rotationDegrees}deg)`;
    };

    useEffect(() => {
        window.addEventListener('mousemove', function (event) {
            handleMouseMove(event, 'eyeLeft');
            handleMouseMove(event, 'eyeRight');
        });
        return () => {
            window.removeEventListener('mousemove', () => handleMouseMove);
        };
    }, []);

    useEffect(() => {
        inView ? onSetIsButtonInView(true) : onSetIsButtonInView(false);
    }, [inView]);

    const scrollToRef = () => {
        window.scrollTo({
            top: height,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img
                    className={css.logo__odvp}
                    src="/icons/odvp/Logo%20OdVp%20-%20No%20star.svg"
                    alt="On double votre pot"
                />
                <figure className={css.logo__star1}>
                    <Lottie options={star1Options} />
                </figure>
                <figure className={css.logo__star2}>
                    <Lottie options={star2Options} />
                </figure>
                <figure className={css.logo__star3}>
                    <Lottie options={star3Options} />
                </figure>
                <figure className={css.logo__star4}>
                    <Lottie options={star4Options} />
                </figure>
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
                    <img
                        className={css.partnership__logo__virgin}
                        src="/icons/odvp/logo-virgin-radio@2x.png"
                        alt="Virgin Radio"
                    />
                    <span>&</span>
                    <img
                        className={css.partnership__logo__lpc}
                        src="/icons/odvp/Logo%20-%20LPC.svg"
                        alt="Le pot commun"
                    />
                </div>
            </div>
            <div onClick={() => scrollToRef()} className={css.scroll}>
                <img
                    className={css.scroll__txt}
                    src="/icons/odvp/scroll-text-down.svg"
                    alt="Scroll pour découvrir le jeux concours"
                />
                <img className={css.scroll__rocket} src="/icons/odvp/snowflake.svg" alt="rocket" />
            </div>

            <div className={css.reindeer}>
                {/* <img className={css.reindeer__head} src="/icons/odvp/Reindeer%20-%20Complete.svg" alt="Reindeer" /> */}
                <img className={css.reindeer__head} src="/icons/odvp/Reindeer%20-%20Head.svg" alt="Reindeer" />
                <div className={css.reindeer__eye}>
                    <span id="eyeLeft" className={css.reindeer__eye__left} />
                    <span id="eyeRight" className={css.reindeer__eye__right} />
                </div>
            </div>

            {/* <span id="eyeLeft" className={css.eye} /> */}
            {/* <span id="eyeRight" className={css.eye} /> */}
        </div>
    );
};

export default Reindeer;
