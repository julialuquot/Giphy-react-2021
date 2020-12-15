import React, { useState, useEffect } from 'react';
import css from './Stats.module.scss';
import Layout from '@components/dashboard/Layout/Layout';
import Stats from '@components/dashboard/Stats/Stats';
import { useTranslation } from '@i18n';
import TabNavigation from '@components/dashboard/TabNavigation/TabNavigation';
import Heading from '@components/common/Heading/Heading';
import AuthService from '@services/domain/AuthService';
import InformationsService from '@services/domain/InformationsService';
import { getRoute, ROUTE } from '@services/http/Route';

type StatsPageProps = {
    partnerUniq: string;
    userRole: string;
};

const StatsPage = ({ partnerUniq, userRole }: StatsPageProps) => {
    const { t } = useTranslation();
    const [brand, setBrand] = useState(null);

    useEffect(() => {
        InformationsService.getBrand(partnerUniq).then((res) => setBrand(res.data));
    }, [partnerUniq]);

    return (
        <Layout>
            <div className={css.statsPageWrapper}>
                {userRole === 'ADMIN' ? (
                    <Heading title={t('dashboard-informations:title-admin')} subtitle={brand?.name} />
                ) : (
                    <Heading
                        title={t('dashboard-informations:title')}
                        subtitle={t('dashboard-informations:sub-title')}
                    />
                )}

                <TabNavigation
                    partnerUniq={partnerUniq}
                    activeTab={'STATS'}
                    tabTitle0={t('dashboard-stats:stats')}
                    tabTitle1={t('dashboard-informations:informations')}
                />
                <Stats userRole={userRole} />
            </div>
        </Layout>
    );
};

StatsPage.getInitialProps = async (ctx) => {
    const principal = await AuthService.getUser(ctx);
    const partnerUniq = await ctx.query.reference;
    const userRole = await AuthService.getUserRole(principal);
    // const brand = await InformationsService.getBrand(partnerUniq);

    // @ts-ignore
    if (!principal || (userRole !== 'ADMIN' && principal.partnerUniq !== partnerUniq)) {
        ctx.res.writeHead(302, {
            Location: getRoute(ROUTE.DASHBOARD.INFORMATIONS, null),
        });
        ctx.res.end();
        return;
    }

    return { principal, partnerUniq, userRole };
};

export default StatsPage;
