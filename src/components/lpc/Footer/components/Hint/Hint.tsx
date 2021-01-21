import React from 'react';
import css from './Hint.module.scss';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';

const Hint = () => {
    const { t } = useTranslation('lpc-footer');

    return (
        <div className={css.hint}>
            <Text variant={'footer'} color={'txt-secondary'}>
                {t('lpc-footer:hint')}
            </Text>
            <img src="/front-static/icons/footer/logo-natixis.svg" alt={'natixis'} />
        </div>
    );
};

export default Hint;
