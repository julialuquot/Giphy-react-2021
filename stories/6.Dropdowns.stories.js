import React from 'react';
import Select from '../src/components/common/Dropdowns/Select/Select';
import SelectSmall from '../src/components/common/Dropdowns/SelectSmall/SelectSmall';
import CustomCollapsible from '../src/components/common/Collapsible/CustomCollapsible/CustomCollapsible';
import icon from '../public/front-static/icons/globe-outline.svg';

export default {
    title: 'Dropdowns',
};

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '300px',
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

const rows = [
    {
        row: 'Item 1',
        link: '#',
    },
    {
        row: 'Item 2',
        link: '#',
    },
    {
        row: 'Item 3',
        link: '#',
    },
    {
        row: 'Item 4',
        link: '#',
    },
];

export const Default = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <Select options={options} />
        </div>
    </div>
);

export const WithIcon = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <SelectSmall options={language} icon={icon} />
        </div>
    </div>
);

export const Collapsible = () => (
    <div style={styles.wrapper}>
        <div style={styles.row}>
            <CustomCollapsible content={rows} trigger={'Mon titre'} />
        </div>
    </div>
);
