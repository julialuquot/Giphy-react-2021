import React from 'react';
import css from './partners-page.module.scss';
import Heading from '@components/common/Heading/Heading';
import Layout from '@components/dashboard/Layout/Layout';
import { useTranslation } from '@i18n';
import Partners from '@components/dashboard/Admin/Partners/Partners';
import AuthService from '@services/domain/AuthService';
import { getRoute, ROUTE } from '@services/http/Route';

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

PartnersPage.getInitialProps = async (ctx) => {
    const principal = await AuthService.getUser(ctx);
    const partnerRef = await ctx.query.reference;

    if (!principal) {
        ctx.res.writeHead(302, {
            Location: getRoute(ROUTE.DASHBOARD.SIGN_IN, null),
        });
        ctx.res.end();
        return;
    }

    return { principal, partnerRef };
};

export default PartnersPage;
