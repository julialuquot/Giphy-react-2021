import React from 'react';
import css from './informations-page.module.scss';
import { useTranslation } from '@i18n';
import Layout from '@components/dashboard/Layout/Layout';
import TabNavigation from '@components/dashboard/TabNavigation/TabNavigation';
import Heading from '@components/common/Heading/Heading';
import Informations from '@components/dashboard/Informations/Informations';
import AuthService from '@services/domain/Dashboard/AuthService';
import { getRoute, ROUTE } from '@services//http/Route';

type InformationsPageProps = {
    principal: any;
    partnerUniq: string;
    userRole: string;
};

const InformationsPage = ({ partnerUniq, userRole }: InformationsPageProps) => {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className={css.informationsPageWrapper}>
                <Heading title={t('dashboard-informations:title')} subtitle={t('dashboard-informations:sub-title')} />
                <TabNavigation
                    userRole={userRole}
                    partnerUniq={partnerUniq}
                    activeTab={'INFORMATIONS'}
                    tabTitle0={t('dashboard-stats:stats')}
                    tabTitle1={t('dashboard-informations:informations')}
                />
                <Informations partnerUniq={partnerUniq} />
            </div>
        </Layout>
    );
};

InformationsPage.getInitialProps = async (ctx) => {
    const principal = await AuthService.getUser(ctx);
    const partnerUniq = await ctx.query.reference;
    const userRole = await AuthService.getUserRole(principal);

    // @ts-ignore
    if (!principal || (userRole !== 'ADMIN' && principal.partnerUniq !== partnerUniq)) {
        ctx.res.writeHead(302, {
            Location: getRoute(ROUTE.DASHBOARD.SIGN_IN, null),
        });
        ctx.res.end();
        return;
    }

    return { principal, partnerUniq, userRole };
};

export default InformationsPage;
