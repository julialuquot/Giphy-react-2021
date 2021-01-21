import React from 'react';
import { useTranslation } from '@i18n';
import css from './AppStore.module.scss';

const AppStore = () => {
    const { t } = useTranslation('lpc-footer');

    return (
        <div className={css.divider}>
            <h4>{t('lpc-footer:app-store-title')}</h4>
            <div className={css.logo}>
                <a href="https://apps.apple.com/fr/app/le-pot-commun/id1119208961" target={'_blank'} rel="noreferrer">
                    <img src="/front-static/icons/footer/store-apple.svg" alt={'apple-store'} />
                </a>
                <a
                    href="https://play.google.com/store/apps/details?id=fr.lepotcommun.lpc"
                    target={'_blank'}
                    rel="noreferrer"
                >
                    <img src="/front-static/icons/footer/store-google.svg" alt={'google-store'} />
                </a>
            </div>
        </div>
    );
};

export default AppStore;
