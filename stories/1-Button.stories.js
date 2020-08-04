import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button/Button';

export default {
    title: 'Button',
    component: Button,
};

const divStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
};

export const Default = () => (
    <div style={divStyle}>
        <Button variant="primary" onClick={action('clicked')}>
            Primary
        </Button>
        <Button variant="secondary" onClick={action('clicked')}>
            Secondary
        </Button>
    </div>
);
