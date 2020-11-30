import React, { useState } from 'react';
import css from './workspace-page.module.scss';
import Layout from '@components/dashboard/Layout/Layout';
import TabNavigation from '@components/dashboard/TabNavigation/TabNavigation';
import Heading from '@components/common/Heading/Heading';
import Stats from '@components/dashboard/Stats/Stats';
import { useTranslation } from '@i18n';
import Informations from '@components/dashboard/Informations/Informations';

const WorkspacePage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const { t } = useTranslation();

    return (
        <Layout>
            <div className={css.workspacePageWrapper}>
                <Heading title={t('informations:title')} subtitle={t('informations:sub-title')} />
                <TabNavigation
                    onTabChange={(tab) => setActiveTab(tab)}
                    tabTitle0={t('stats:stats')}
                    tabTitle1={t('informations:informations')}
                />

                {activeTab === 0 ? <Stats /> : <Informations />}
            </div>
        </Layout>
    );
};

export default WorkspacePage;
