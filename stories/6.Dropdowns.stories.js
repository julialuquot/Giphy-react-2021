import React from 'react';
import Select from '@components/common/Dropdowns/Select/Select';
import SelectSmall from '@components/common/Dropdowns/SelectSmall/SelectSmall';

export default {
    title: 'Dropdowns',
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

const language = [
    { value: 'Français', label: 'Français' },
    { value: 'Anglais', label: 'Anglais' },
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

export const WithIcon = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <SelectSmall options={language} />
        </div>
    </div>
);
