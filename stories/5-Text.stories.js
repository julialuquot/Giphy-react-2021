import React from 'react';
import Text from '../src/components/common/Text/Text';

export default {
    title: 'Text',
    component: Text,
};

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '20px',
        padding: '30px',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        width: '90vw',
        marginBottom: '20px',
    },
};

export const Default = () => (
    <div style={styles.wrapper}>
        <Text variant={'body_01'} color={'ui-primary'}>
            Body 01
        </Text>
        <br />
        <Text variant={'body_02'} color={'ui-secondary'}>
            Body 02
        </Text>
        <br />
        <Text variant={'button'} color={'brand-secondary'}>
            Button
        </Text>
        <br />
        <Text variant={'label'}>Label</Text>
        <br />
        <Text variant={'tagline'}>Tagline</Text>
        <br />
        <Text variant={'caption'}>Caption</Text>
        <br />
        <Text variant={'hint'}>Hint</Text>
    </div>
);
