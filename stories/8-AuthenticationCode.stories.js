import React from 'react';
import AuthenticationCode from '../src/components/common/AuthenticationCode/AuthenticationCode';
import styles from './styles';

export default {
    title: 'AuthenticationCode',
    component: AuthenticationCode,
};

export const Default = () => (
    <div style={styles.wrapper}>
        <AuthenticationCode />
    </div>
);
