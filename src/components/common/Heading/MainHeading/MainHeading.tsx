import React from 'react';
import css from './MainHeading.module.scss';
import Text from '@components/common/Text/Text';

type HeadingProps = {
    title: string;
    subtitle?: string;
    paragraph?: string;
    margin?: string;
};

const MainHeading = ({ title, subtitle, paragraph, margin }: HeadingProps) => {
    const style = {
        margin: margin,
    };
    return (
        <div className={css.heading} style={style}>
            <Text variant={'tagline'} color={'brand-primary'}>
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
