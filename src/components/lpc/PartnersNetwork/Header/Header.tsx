import React from 'react';
import css from './Header.module.scss';
import Text from '@components/common/Text/Text';
import { useTranslation } from '@i18n';

const Header = () => {
    const { t } = useTranslation('lpc-partners-network');

    return (
        <div className={css.header}>
            <div className={css.header__tag}>
                <img src="/front-static/icons/checkmark-success.svg" alt="success" />
                <Text variant={'caption_00'} color={'txt-primary'}>
                    {t('lpc-partners-network:favorites.header.1')}
                </Text>
            </div>
            <div className={css.header__tag}>
                <img src="/front-static/icons/checkmark-success.svg" alt="success" />
                <Text variant={'caption_00'} color={'txt-primary'}>
                    {t('lpc-partners-network:favorites.header.2')}
                </Text>
            </div>
            <div className={css.header__tag}>
                <img src="/front-static/icons/checkmark-success.svg" alt="success" />
                <Text variant={'caption_00'} color={'txt-primary'}>
                    {t('lpc-partners-network:favorites.header.3')}
                </Text>
            </div>
        </div>
    );
};

export default Header;
