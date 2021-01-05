import React, { useCallback, useEffect, useRef } from 'react';
import css from './BrandsGrid.module.scss';

const ODD_COLUMNS_SPEED = -0.2;
const EVEN_COLUMNS_SPEED = 0.2;

type BrandsGridProps = {
    brandsList: { _id: string; picture: string }[];
};

const BrandsGrid = ({ brandsList }: BrandsGridProps) => {
    const gridRef = useRef();

    const head = brandsList.slice(0, 5);
    const tail = brandsList.slice(5, 11);

    const offset = (el) => {
        const rect = el.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    };

    const handleScroll = useCallback(() => {
        if (!gridRef || !gridRef.current || window.scrollY === undefined || window.innerWidth <= 875) {
            return;
        }

        // @ts-ignore
        const scroll = window.scrollY - offset(gridRef.current).top + gridRef.current.offsetHeight;
        if (scroll < 0) {
            return;
        }

        // @ts-ignore
        const domRows = gridRef.current.children[0].children;
        for (let i = 1; i <= domRows.length; i++) {
            const odd = i % 2 === 1;
            const transform = `translateY(${-scroll * (odd ? ODD_COLUMNS_SPEED : EVEN_COLUMNS_SPEED)}px)`;
            domRows[i - 1].style.transform = transform;
            domRows[i - 1].style.MozTransform = transform;
            domRows[i - 1].style.webkitTransform = transform;
        }
    }, [gridRef]);

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll());
    }, [handleScroll]);

    return (
        <div className={`${css.brands} `} ref={gridRef}>
            <div className={css.brands__grid}>
                <div className={css.brands__grid__row}>
                    {head.map((brand, index) => {
                        return (
                            <div
                                key={index}
                                className={css.brands__grid__row__brand}
                                style={{ backgroundImage: `url(${brand.picture})` }}
                            />
                        );
                    })}
                </div>
                <div className={css.brands__grid__row}>
                    {tail.map((brand, index) => {
                        return (
                            <div
                                key={index}
                                className={css.brands__grid__row__brand}
                                style={{ backgroundImage: `url(${brand.picture})` }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BrandsGrid;
