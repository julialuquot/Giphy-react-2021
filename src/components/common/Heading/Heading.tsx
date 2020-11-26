import React from 'react';
import css from './Heading.module.scss';

type HeadingProps = {
    title: string;
    subtitle: string;
};

const Heading = ({ title, subtitle }: HeadingProps) => {
    return (
        <div className={css.heading}>
            <h2 className={css.heading__title}>{title}</h2>
            <h2 className={css.heading__subtitle}>{subtitle}</h2>
        </div>
    );
};

export default Heading;
