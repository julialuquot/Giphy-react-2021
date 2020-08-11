import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/common/Button/Button';

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
            <Button style={styles.item} variant="brand-primary" size="small" onClick={action('clicked')}>
                Primary Small
            </Button>
            <Button variant="brand-primary" size="medium" onClick={action('clicked')}>
                Primary Medium
            </Button>
            <Button variant="brand-primary" size="large" onClick={action('clicked')}>
                Primary Medium
            </Button>
        </div>
        <div style={styles.row}>
            <Button variant="brand-secondary" size="small" onClick={action('clicked')}>
                Secondary
            </Button>
            <Button variant="brand-secondary" size="medium" onClick={action('clicked')}>
                Secondary Small
            </Button>
            <Button variant="brand-secondary" size="large" onClick={action('clicked')}>
                Secondary Large
            </Button>
        </div>
    </div>
);

export const withLoading = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Button style={styles.item} variant="brand-primary" size="small" isLoading onClick={action('clicked')}>
                Primary Small
            </Button>
            <Button variant="brand-primary" size="medium" isLoading onClick={action('clicked')}>
                Primary Medium
            </Button>
            <Button variant="brand-primary" size="large" isLoading onClick={action('clicked')}>
                Primary Medium
            </Button>
        </div>
        <div style={styles.row}>
            <Button variant="brand-secondary" size="small" isLoading onClick={action('clicked')}>
                Secondary
            </Button>
            <Button variant="brand-secondary" size="medium" isLoading onClick={action('clicked')}>
                Secondary Small
            </Button>
            <Button variant="brand-secondary" size="large" isLoading onClick={action('clicked')}>
                Secondary Large
            </Button>
        </div>
    </div>
);
