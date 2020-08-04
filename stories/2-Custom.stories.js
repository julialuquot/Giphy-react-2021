import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Button/Button';
export default {
    title: 'Button',
    component: Button,
};

export const Default = () => (
    <Button variant="primary" onClick={action('clicked')}>
        Primary
    </Button>
);
