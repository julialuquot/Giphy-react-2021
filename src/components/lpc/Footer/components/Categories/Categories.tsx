import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';
import FooterCollapsible from '@components/common/Collapsible/FooterCollapsible/FooterCollapsible';
import useWindowSize from '@components/common/hooks/useWindowSize';
import { M_DEVICE } from '@components/lpc/Constants';
import { getRoute, ROUTE } from '@services/http/Route';
import css from './Categories.module.scss';

const Categories = () => {
    const { t } = useTranslation('lpc-footer');

    const categories = [
        {
            title: t('lpc-footer:categories.col-1.title'),
            rows: [
                {
                    row: t('lpc-footer:categories.col-1.row-1'),
                    link: '#',
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-1.row-2'),
                    link: '#',
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-1.row-3'),
                    link: '#',
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-1.row-4'),
                    link: '#',
                    icon: '',
                },
            ],
        },
        {
            title: t('lpc-footer:categories.col-2.title'),
            rows: [
                {
                    row: t('lpc-footer:categories.col-2.row-1'),
                    link: '#',
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-2.row-2'),
                    link: '#',
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-2.row-3'),
                    link: 'https://www.cityvent.com/',
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-2.row-4'),
                    link: 'https://business.lepotcommun.fr/',
                    icon: '',
                },
            ],
        },
        {
            title: t('lpc-footer:categories.col-3.title'),
            rows: [
                {
                    row: t('lpc-footer:categories.col-3.row-1'),
                    link: 'https://www.facebook.com/Lepotcommun.fr',
                    icon: '/front-static/icons/action/link.svg',
                },
                {
                    row: t('lpc-footer:categories.col-3.row-2'),
                    link: 'https://www.instagram.com/le_pot_commun.fr/',
                    icon: '/front-static/icons/action/link.svg',
                },
                {
                    row: t('lpc-footer:categories.col-3.row-3'),
                    link: 'https://twitter.com/lepotcommun',
                    icon: '/front-static/icons/action/link.svg',
                },
                {
                    row: t('lpc-footer:categories.col-3.row-4'),
                    link: 'https://www.linkedin.com/company/le-pot-commun/?originalSubdomain=fr',
                    icon: '/front-static/icons/action/link.svg',
                },
            ],
        },
        {
            title: t('lpc-footer:categories.col-4.title'),
            rows: [
                {
                    row: t('lpc-footer:categories.col-4.row-1'),
                    link: '#',
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-4.row-2'),
                    link: '#',
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-4.row-3'),
                    link: getRoute(ROUTE.LPC.CGU, null),
                    icon: '',
                },
                {
                    row: t('lpc-footer:categories.col-4.row-4'),
                    link: '#',
                    icon: '',
                },
            ],
        },
    ];
    const { width } = useWindowSize();

    return (
        <>
            {width > M_DEVICE ? (
                <div className={css.container}>
                    {categories.map((category) => (
                        <div key={category.title} className={css.container__col}>
                            <Text customClass={css.container__col__title} variant={'caption_00'} color={'txt-primary'}>
                                {category.title}
                            </Text>
                            {category.rows.map((row, index) => (
                                <Link key={index} href={row.link}>
                                    <a>
                                        <Text variant={'body_02'} color={'txt-secondary'}>
                                            {row.row}
                                            {row.icon && (
                                                <img className={css.container__col__icon} src={row.icon} alt="link" />
                                            )}
                                        </Text>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                categories.map((category) => (
                    <FooterCollapsible
                        key={category.title}
                        trigger={category.title}
                        content={category.rows.map((row) => row)}
                    />
                ))
            )}
        </>
    );
};

export default Categories;
