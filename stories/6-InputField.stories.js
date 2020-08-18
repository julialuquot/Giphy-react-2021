import React from 'react';
import InputField from '../src/components/common/InputField/InputField';

export default {
    title: 'Input field',
    component: InputField,
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
            <InputField label="Name" placeholder="name" />
            <InputField error={true} label="Name" placeholder="name" />
            <InputField valid={true} label="Name" placeholder="name" />
        </div>

        <div style={styles.row}>
            <InputField label="Name" placeholder="name" icon="/icons/eye-outline.svg" iconPosition="right" />
            <InputField label="Name" placeholder="name" icon="/icons/eye-outline.svg" iconPosition="left" />
            <InputField
                label="Name"
                placeholder="name"
                icon="/icons/search.svg"
                iconPosition="left"
                customStyle="custom1"
            />
        </div>
    </div>
);
