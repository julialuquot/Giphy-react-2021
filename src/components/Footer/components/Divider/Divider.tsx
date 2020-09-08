import React from 'react';
import css from './Divider.module.scss';
import { withTranslation } from '@i18n';
import SelectSmall from '@components/common/Dropdowns/SelectSmall/SelectSmall';

const namespacesRequired = ['footer'];

const language = [
    { value: 'Français', label: 'Français' },
    { value: 'Anglais', label: 'Anglais' },
];

const Divider = () => {
    return (
        <div className={css.divider}>
            <SelectSmall icon={'/icons/globe-outline.svg'} options={language} />
            <div className={css.logo}>
                <img src="/icons/play-store.svg" alt={'play-store'} />
                <img src="/icons/app-store.svg" alt={'app-store'} />
            </div>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Divider);