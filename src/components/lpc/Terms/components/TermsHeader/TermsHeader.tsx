import React from 'react';
import css from './TermsHeader.module.scss';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';

const TermsHeader = () => {
    const { t } = useTranslation('terms');

    return (
        <div className={css.header}>
            <Text variant={'tagline'} color={'brand-primary'}>
                {t('terms:title')}
            </Text>
            <h1> {t('terms:subtitle')}</h1>
        </div>
    );
};

export default TermsHeader;
