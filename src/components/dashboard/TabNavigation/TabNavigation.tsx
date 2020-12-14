import React from 'react';
import css from './TabNavigation.module.scss';
import Link from 'next/link';
import { getRoute, ROUTE } from '@services//http/Route';

type TabNavigation = {
    tabTitle0: string;
    tabTitle1: string;
    partnerRef: string;
    activeTab: string;
};

const TabNavigation = ({ activeTab, tabTitle0, tabTitle1, partnerRef }: TabNavigation) => {
    return (
        <div className={css.navigation}>
            <Link href={getRoute(ROUTE.DASHBOARD.STATS, partnerRef)}>
                <a className={`${css.tab} ${activeTab === 'STATS' && css.tab__selected}`}>{tabTitle0}</a>
            </Link>
            <Link href={getRoute(ROUTE.DASHBOARD.INFORMATIONS, partnerRef)}>
                <a className={`${css.tab} ${activeTab === 'INFORMATIONS' && css.tab__selected}`}>{tabTitle1}</a>
            </Link>
        </div>
    );
};

export default TabNavigation;
