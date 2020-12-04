import React from 'react';
import css from './Spinner.scss';

type SpinnerProps = {
    customClass?: string;
    margin?: string;
    width?: string;
    height?: string;
};

const Spinner = ({ customClass, margin, width, height }: SpinnerProps) => {
    const style = {
        margin: margin,
        width: width,
        height: height,
    };
    return (
        <>
            <img
                className={`${css.spinner} ${customClass || ''}   `}
                src="/front-static/icons/spinner.svg"
                alt={'Loading...'}
                style={style}
            />
        </>
    );
};

export default Spinner;
