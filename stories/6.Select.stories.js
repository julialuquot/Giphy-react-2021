import React from 'react';
import Select from '../src/components/common/Select/Select';

export default {
    title: 'Select',
    component: Select,
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
        alignItems: 'center',
        width: '100%',
        marginBottom: '20px',
        height: '100%',
    },
};

const options = [
    { value: 'Un anniversaire', label: 'Un anniversaire' },
    { value: 'Un pot de départ', label: 'Un pot de départ' },
    { value: 'Un cadeau commun', label: 'Un cadeau commun' },
];

export const Default = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Select options={options}>With Label</Select>
        </div>
        <div style={styles.row}>
            <Select placeholder={'With placeholder'} options={options}>
                With Label
            </Select>
        </div>
    </div>
);
