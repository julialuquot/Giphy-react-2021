import React, { useState } from 'react';
import { useTranslation } from '@i18n';
import Categories from '@components/lpc/Footer/components/Categories/Categories';
import Hint from '@components/lpc/Footer/components/Hint/Hint';
import AppStore from '@components/lpc/Footer/components/AppStore/AppStore';
import SelectSecondary from '@components/common/Dropdowns/SelectSecondary/SelectSecondary';
import { languageModel } from '@models/ViewModel/languageModel';
import css from './Footer.module.scss';

const Footer = () => {
    const { t } = useTranslation('lpc-footer');

    const [, setSelectedLanguageLanguage] = useState('initState');

    return (
        <footer className={css.footer}>
            <Categories />
            <AppStore />
            <SelectSecondary
                options={languageModel.map((item) => {
                    return {
                        value: item.value,
                        label: t(`lpc-footer:language.${item.value}`),
                    };
                })}
                onSelect={(value) => setSelectedLanguageLanguage(value)}
                customMenu={css.select__menu}
                customControl={css.select__control}
                customWrapper={css.select__custom__wrapper}
                openIcon={'/front-static/icons/navigation/caret-down.svg'}
                closedIcon={'/front-static/icons/navigation/caret-down.svg'}
                leftIcon={'/front-static/icons/display/language.svg'}
            />
            <Hint />
        </footer>
    );
};

export default Footer;
