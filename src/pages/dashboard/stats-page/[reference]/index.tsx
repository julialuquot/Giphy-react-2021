import React from 'react';
import css from './Stats.module.scss';
import Layout from '@components/dashboard/Layout/Layout';
import Stats from '@components/dashboard/Stats/Stats';
import { useTranslation } from '@i18n';
import TabNavigation from '@components/dashboard/TabNavigation/TabNavigation';
import Heading from '@components/common/Heading/Heading';
import AuthService from '@services/domain/AuthService';
import { getRoute, ROUTE } from '@services/http/Route';

type StatsPageProps = {
    partnerRef: string;
};

const StatsPage = ({ partnerRef }: StatsPageProps) => {
    const { t } = useTranslation();

    return (
        <Layout>
            <div className={css.statsPageWrapper}>
                <Heading title={t('dashboard-informations:title')} subtitle={t('dashboard-informations:sub-title')} />
                <TabNavigation
                    partnerRef={partnerRef}
                    activeTab={'STATS'}
                    tabTitle0={t('dashboard-stats:stats')}
                    tabTitle1={t('dashboard-informations:informations')}
                />
                <Stats />
            </div>
        </Layout>
    );
};

StatsPage.getInitialProps = async (ctx) => {
    const principal = await AuthService.getUser(ctx);
    const queryReference = await ctx.query.reference;
    const partnerRef = await ctx.query.reference;
    const userRole = await AuthService.getUserRole(principal);

    // @ts-ignore
    if (!principal || (userRole !== 'ADMIN' && principal.partnerUniq !== queryReference)) {
        ctx.res.writeHead(302, {
            Location: getRoute(ROUTE.DASHBOARD.SIGN_IN, null),
        });
        ctx.res.end();
        return;
    }

    return { principal, partnerRef };
};

export default StatsPage;
