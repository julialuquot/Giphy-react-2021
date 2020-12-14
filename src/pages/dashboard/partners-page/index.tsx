import React from 'react';
import css from './partners-page.module.scss';
import Heading from '@components/common/Heading/Heading';
import Layout from '@components/dashboard/Layout/Layout';
import { useTranslation } from '@i18n';
import Partners from '@components/dashboard/Admin/Partners/Partners';

const PartnersPage = () => {
    const { t } = useTranslation('dashboard-partners');

    return (
        <Layout>
            <div className={css.partnersPageWrapper}>
                <Heading title={t('dashboard-partners:title')} subtitle={t('dashboard-partners:sub-title')} />
                <Partners />
            </div>
        </Layout>
    );
};

export default PartnersPage;
