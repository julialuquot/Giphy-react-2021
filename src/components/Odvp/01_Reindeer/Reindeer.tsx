import React, { useEffect, useRef } from 'react';
import css from './Reindeer.module.scss';
import OdvpButton from '@components/Odvp/OdvbButton/OdvpButton';
import useWindowSize from '@components/Hooks/useWindowSize';

type ScreenOneProps = {
    onShowNavBar: (boolean) => boolean;
};

const Reindeer = ({ onShowNavBar }: ScreenOneProps) => {
    const { height } = useWindowSize();
    const btnRef = useRef(null);

    const handleMouseMove = (event, element) => {
        const item = document.getElementById(element);
        const mouseX = item.getBoundingClientRect().left;
        const mouseY = item.getBoundingClientRect().top;
        const radianDegrees = Math.atan2(event.pageX - mouseX, event.pageY - mouseY);
        const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
        item.style.transform = `rotate(${rotationDegrees}deg)`;

        // item.animate(
        //     [
        //         // keyframes
        //         { transform: `rotate(${rotationDegrees}deg)` },
        //     ],
        //     {
        //         // timing options
        //         duration: 800,
        //         easing: 'linear',
        //     },
        // );
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

    const handleScroll = () => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        const getDistanceFromTop = (element) => {
            const rect = element.getBoundingClientRect();
            return rect.top + scrollY;
        };

        const elementHeight = btnRef.current.offsetHeight;
        const distanceFromTop = getDistanceFromTop(btnRef.current);

        scrollY - distanceFromTop - elementHeight >= 0 ? onShowNavBar(true) : onShowNavBar(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToRef = () => {
        window.scrollTo({
            top: height,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={css.container}>
            <img
                className={css.logo_odvp}
                src="/icons/odvp/Logo%20OdVp%20-%20No%20star.svg"
                alt="On double votre pot"
            />
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
            {/* <img className={css.stars} src="/icons/odvp/stars.svg" alt="stars" /> */}
        </div>
    );
};

export default Reindeer;
