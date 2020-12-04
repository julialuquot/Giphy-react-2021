import React from 'react';
import Checkbox from '../src/components/common/Checkbox/Checkbox';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '20px',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: '20px',
        alignItems: 'center',
        height: '150px',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
};

export const Default = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Checkbox />
            <Checkbox>With Label</Checkbox>
            <Checkbox disabled>Disabled</Checkbox>
            <Checkbox success>Success</Checkbox>
            <Checkbox error>Error</Checkbox>
        </div>
    </div>
);
