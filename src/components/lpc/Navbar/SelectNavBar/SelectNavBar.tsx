import React from 'react';
import css from './SelectNavBar.module.scss';
import { withTranslation } from '@i18n';
import Link from 'next/link';
import SelectTab from '@components/common/Dropdowns/SelectTab/SelectTab';
import Text from '@components/common/Text/Text';

const namespacesRequired = ['navbar'];

type SelectNavBarProps = {
    t: (string) => string;
};

const SelectNavBar = ({ t }: SelectNavBarProps) => {
    const labelArray = [
        { tag: t('navbar:select.free'), title: t('navbar:select.partners'), link: '#' },
        { tag: t('navbar:select.free'), title: t('navbar:select.gift-card'), link: '#' },
        { tag: t('navbar:select.commission'), title: t('navbar:select.bank-transfer'), link: '#' },
    ];

    const label = labelArray.map((label) => {
        return (
            <Link key={label.title} href={label.link}>
                <a className={css.customLabel}>
                    <Text variant="caption_00">{label.tag}</Text>
                    <Text customClass={css.customLabel__filter} variant="button">
                        {label.title}
                    </Text>
                </a>
            </Link>
        );
    });

    const options = [
        { value: t('navbar:select.partners'), label: label[0] },
        { value: t('navbar:select.gift-card'), label: label[1] },
        { value: t('navbar:select.bank-transfer'), label: label[2] },
    ];
    return (
        <div>
            <SelectTab options={options} placeholder="Nos moyens de dépenses" />
        </div>
    );
};

export default withTranslation(namespacesRequired)(SelectNavBar);
