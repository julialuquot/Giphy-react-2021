import React from 'react';
import css from './Heading.module.scss';

type HeadingProps = {
    title: string;
    subtitle: string;
    inverseColor?: boolean;
};

const Heading = ({ title, subtitle, inverseColor }: HeadingProps) => {
    return (
        <div className={css.heading}>
            <h2 className={`${!inverseColor ? css.heading__title : css.heading__title__inverse}`}>{title}</h2>
            <h2 className={`${!inverseColor ? css.heading__subtitle : css.heading__subtitle__inverse}`}>{subtitle}</h2>
        </div>
    );
};

export default Heading;
