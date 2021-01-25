import React from 'react';
import css from './SecondaryHeading.module.scss';
import Text from '@components/common/Text/Text';

type HeadingProps = {
    title: string;
    subtitle?: string;
    paragraph?: string;
    margin?: string;
    subtitleColor?: string;
};

const SecondaryHeading = ({ title, subtitle, paragraph, margin, subtitleColor }: HeadingProps) => {
    const style = {
        margin: margin,
    };
    return (
        <div className={css.heading} style={style}>
            <p className={css.heading__subtitle} style={{ color: subtitleColor }}>
                {subtitle}
            </p>
            <h3>{title}</h3>
            <Text variant={'body_01'} color={'txt-primary'}>
                {paragraph}
            </Text>
        </div>
    );
};

export default SecondaryHeading;
