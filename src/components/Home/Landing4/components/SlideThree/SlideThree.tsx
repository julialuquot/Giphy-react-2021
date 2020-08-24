import React from 'react';
import css from './SlideThree.module.scss';
import Text from '@components/common/Text/Text';

const SlideThree = () => {
    return (
        <div className={css.slide_one}>
            <h2>Slide3</h2>
            <Text color={'ui-secondary'} variant={'body_01'}>
                Lorem ipsum dolor sit amet..
            </Text>
        </div>
    );
};

export default SlideThree;
