import React, { useContext, useEffect, useState } from 'react';
import css from './Stats.module.scss';
import { useRouter } from 'next/router';
import AuthContext from '@components/dashboard/context/auth/AuthContext';
import moment from 'moment';
import CardStats from '@components/dashboard/Stats/CardStats';
import { useTranslation } from '@i18n';
import Documents from '@components/dashboard/Stats/Documents';
import BusinessBanner from '@components/common/BuisinessBanner/BusinessBanner';

const Stats = () => {
    const { t } = useTranslation('dashboard-stats');

    const router = useRouter();
    const authContext = useContext(AuthContext);
    const { user, isFetching } = authContext;

    const [currentMonth, setCurrentMonth] = useState({ startOfMonth: '', endOfMonth: '' });

    useEffect(() => {
        !user && router.push('/dashboard/connexion');
    }, [router, user]);

    useEffect(() => {
        const startOfMonth = moment().startOf('month').format('DD');
        const endOfMonth = moment().endOf('month').format('DD MMMM YYYY');
        setCurrentMonth((prevState) => {
            return { ...prevState, startOfMonth: startOfMonth, endOfMonth: endOfMonth };
        });
    }, []);

    const mockFiles = [
        {
            id: 1,
            title: "Droits d'entrées au réseau d'affiliation 1",
        },
        {
            id: 2,
            title: "Droits d'entrées au réseau d'affiliation 2",
        },
        {
            id: 3,
            title: "Droits d'entrées au réseau d'affiliation 3",
        },
        {
            id: 4,
            title: "Droits d'entrées au réseau d'affiliation 4",
        },
        {
            id: 5,
            title: "Droits d'entrées au réseau d'affiliation 5",
        },
        {
            id: 6,
            title: "Droits d'entrées au réseau d'affiliation 6",
        },
        {
            id: 7,
            title: "Droits d'entrées au réseau d'affiliation 7",
        },
        {
            id: 8,
            title: "Droits d'entrées au réseau d'affiliation 8",
        },
        {
            id: 9,
            title: "Droits d'entrées au réseau d'affiliation 9",
        },
        {
            id: 10,
            title: "Droits d'entrées au réseau d'affiliation 10",
        },
        {
            id: 11,
            title: "Droits d'entrées au réseau d'affiliation 11",
        },
        {
            id: 12,
            title: "Droits d'entrées au réseau d'affiliation 12",
        },
    ];

    const mockStats = [
        {
            title: t('dashboard-stats:card.transactions'),
            stats: 21,
            imgSrc: '/front-static/icons/suspend.svg',
        },
        { title: t('dashboard-stats:card.expenses'), stats: 2500, imgSrc: '/front-static/icons/suspend.svg' },
        { title: t('dashboard-stats:card.top'), stats: 964, imgSrc: '/front-static/icons/suspend.svg' },
    ];

    return (
        <div className={css.stats}>
            {!isFetching && user && (
                <div className={css.stats__content}>
                    <p className={css.stats__content__date}>
                        {t('dashboard-stats:period-from')} {currentMonth.startOfMonth} {t('dashboard-stats:to')}{' '}
                        {currentMonth.endOfMonth}
                    </p>
                    <div className={css.stats__content__grid}>
                        {mockStats.map((stat) => (
                            <CardStats key={stat.title} title={stat.title} stats={stat.stats} imgScr={stat.imgSrc} />
                        ))}
                    </div>

                    <Documents files={mockFiles} />

                    <BusinessBanner
                        title={t('footer:banner.title')}
                        description={t('footer:banner.text')}
                        buttonLabel={t('footer:banner.btn')}
                    />
                </div>
            )}
        </div>
    );
};

export default Stats;
