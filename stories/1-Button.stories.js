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

export const Primary = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Button variant="primary" size="small" onClick={action('clicked')}>
                Small
            </Button>
            <Button variant="primary" size="medium" onClick={action('clicked')}>
                Medium
            </Button>
            <Button variant="primary" size="large" onClick={action('clicked')}>
                Large
            </Button>
            <Button variant="primary" size="large" isDisabled onClick={action('clicked')}>
                Disabled
            </Button>
        </div>
    </div>
);

export const Secondary = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Button variant="secondary" size="small" onClick={action('clicked')}>
                Small
            </Button>
            <Button variant="secondary" size="medium" onClick={action('clicked')}>
                Medium
            </Button>
            <Button variant="secondary" size="large" onClick={action('clicked')}>
                Large
            </Button>
            <Button size="large" isDisabled variant="secondary" onClick={action('clicked')}>
                Disabled
            </Button>
        </div>
    </div>
);

export const withLoading = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Button variant="primary" size="small" isLoading onClick={action('clicked')}>
                Primary Small
            </Button>
            <Button variant="primary" size="medium" isLoading onClick={action('clicked')}>
                Primary Medium
            </Button>
            <Button variant="primary" size="large" isLoading onClick={action('clicked')}>
                Primary Medium
            </Button>
        </div>
        <div style={styles.row}>
            <Button variant="secondary" size="small" isLoading onClick={action('clicked')}>
                Secondary
            </Button>
            <Button variant="secondary" size="medium" isLoading onClick={action('clicked')}>
                Secondary Small
            </Button>
            <Button variant="secondary" size="large" isLoading onClick={action('clicked')}>
                Secondary Large
            </Button>
        </div>
    </div>
);
