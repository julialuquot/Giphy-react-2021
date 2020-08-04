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
        justifyContent: 'space-around',
        width: '90vw',
        marginBottom: '20px',
    },
};

export const Default = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Button type={'button'} variant={'primary'} onClick={action('clicked')}>
                Primary
            </Button>
            <Button type={'button'} variant={'primary'} isLoading onClick={action('clicked')}>
                Loading
            </Button>
            <Button variant={'primary'} isDisabled onClick={action('clicked')}>
                Disabled
            </Button>
        </div>
        <div style={styles.row}>
            <Button type={'button'} variant={'secondary'} onClick={action('clicked')}>
                Secondary
            </Button>
            <Button type={'button'} variant={'secondary'} isDisabled onClick={action('clicked')}>
                Disabled
            </Button>{' '}
            <Button type={'button'} variant={'secondary'} isLoading onClick={action('clicked')}>
                Disabled
            </Button>
        </div>
    </div>
);
