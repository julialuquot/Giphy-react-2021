import React, { useState } from 'react';
import css from './workspace-page.module.scss';
import { useTranslation } from '@i18n';
import Layout from '@components/dashboard/Layout/Layout';
import TabNavigation from '@components/dashboard/TabNavigation/TabNavigation';
import Heading from '@components/common/Heading/Heading';
import Stats from '@components/dashboard/Stats/Stats';
import Informations from '@components/dashboard/Informations/Informations';
import AuthService from '@services/domain/AuthService';
import { getRoute, ROUTE } from '@services//http/Route';

type WorkspaceProps = {
    principal: any;
};

const WorkspacePage = ({ principal }: WorkspaceProps) => {
    const [activeTab, setActiveTab] = useState(0);
    const { t } = useTranslation();

    return (
        <Layout>
            <div className={css.workspacePageWrapper}>
                <Heading title={t('dashboard-informations:title')} subtitle={t('dashboard-informations:sub-title')} />
                <TabNavigation
                    onTabChange={(tab) => setActiveTab(tab)}
                    tabTitle0={t('dashboard-stats:stats')}
                    tabTitle1={t('dashboard-informations:informations')}
                />

                {activeTab === 0 ? <Stats principal={principal} /> : <Informations principal={principal} />}
            </div>
        </Layout>
    );
};

WorkspacePage.getInitialProps = async (ctx) => {
    const principal = await AuthService.getUser(ctx);
    if (!principal) {
        ctx.res.writeHead(302, {
            Location: getRoute(ROUTE.DASHBOARD.SIGN_IN, null),
        });
        ctx.res.end();
        return;
    }

    return { principal };
};

export default WorkspacePage;
