import React from 'react';
import Layout from '@components/lpc/Layout/Layout';
import { useTranslation } from '@i18n';
import Landing1 from '@components/lpc/Home/01-Landing/Landing';
import BusinessBanner from '@components/common/BuisinessBanner/BusinessBanner';
import css from './HomePage.module.scss';

const HomePage = () => {
    const { t } = useTranslation('lpc-footer');

    return (
        <Layout>
            <div className={css.homePageWrapper}>
                <Landing1 />
                <BusinessBanner
                    title={t('lpc-footer:banner.title')}
                    description={t('lpc-footer:banner.text')}
                    buttonLabel={t('lpc-footer:banner.btn')}
                />
            </div>
        </Layout>
    );
};

export default HomePage;
