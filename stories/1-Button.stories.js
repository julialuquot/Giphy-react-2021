import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button/Button';

export default {
    title: 'Button',
    component: Button,
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
        alignItems: 'space-around',
        width: '90vw',
        marginBottom: '20px',
    },
};

export const Default = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Button style={styles.item} variant="primary" size="small" onClick={action('clicked')}>
                Primary Small
            </Button>
            <Button variant="primary" size="medium" onClick={action('clicked')}>
                Primary Medium
            </Button>
            <Button variant="primary" size="large" onClick={action('clicked')}>
                Primary Medium
            </Button>
        </div>
        <div style={styles.row}>
            <Button variant="secondary" size="small" onClick={action('clicked')}>
                Secondary
            </Button>
            <Button variant="secondary" size="medium" onClick={action('clicked')}>
                Secondary Small
            </Button>
            <Button variant="secondary" size="large" onClick={action('clicked')}>
                Secondary Large
            </Button>
        </div>
    </div>
);
