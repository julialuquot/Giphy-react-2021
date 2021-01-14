import React from 'react';
import css from './MainHeading.module.scss';
import Text from '@components/common/Text/Text';

type HeadingProps = {
    title: string;
    subtitle?: string;
    paragraph?: string;
    margin?: string;
    subtitleColor?: string;
};

const MainHeading = ({ title, subtitle, paragraph, margin, subtitleColor }: HeadingProps) => {
    const style = {
        margin: margin,
    };
    return (
        <div className={css.heading} style={style}>
            <Text variant={'tagline'} color={subtitleColor || 'brand-primary'}>
                {subtitle}
            </Text>
            <h1>{title}</h1>
            <Text variant={'body_00'} color={'txt-primary'}>
                {paragraph}
            </Text>
        </div>
    );
};

export default MainHeading;
