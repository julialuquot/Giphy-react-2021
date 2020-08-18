import React from 'react';
import Xconnect from '../src/components/common/Xconnect/Xconnect';
import styles from './styles';

export default {
    title: 'Xconnect',
    component: Xconnect,
};

export const Default = () => (
    <div style={styles.wrapper}>
        <Xconnect />
    </div>
);
