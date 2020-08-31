import React from 'react';
import css from './Categories.module.scss';
import Text from '@components/common/Text/Text';
import { withTranslation } from '@i18n';
import Link from 'next/link';
import CustomCollapsible from '@components/common/Collapsible/Collapsible';
import useWindowSize from '../../../Hooks/useWindowSize';
import { M_DEVICE } from '@components/Constants';

const namespacesRequired = ['footer'];

type GridProps = { t: (string) => string };

const Categories = ({ t }: GridProps) => {
    const categories = [
        {
            title: t('footer:categories.col-1.title'),
            rows: [
                {
                    row: t('footer:categories.col-1.row-1'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-1.row-2'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-1.row-3'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-1.row-4'),
                    link: '#',
                },
            ],
        },
        {
            title: t('footer:categories.col-2.title'),
            rows: [
                {
                    row: t('footer:categories.col-2.row-1'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-2.row-2'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-2.row-3'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-2.row-4'),
                    link: '#',
                },
            ],
        },
        {
            title: t('footer:categories.col-3.title'),
            rows: [
                {
                    row: t('footer:categories.col-3.row-1'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-3.row-2'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-3.row-3'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-3.row-4'),
                    link: '#',
                },
            ],
        },
        {
            title: t('footer:categories.col-4.title'),
            rows: [
                {
                    row: t('footer:categories.col-4.row-1'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-4.row-2'),
                    link: '#',
                },
                {
                    row: t('footer:categories.col-4.row-3'),
                    link: '#',
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
                            <h6>{category.title}</h6>
                            {category.rows.map((row, index) => (
                                <Link key={index} href={row.link}>
                                    <a>
                                        <Text variant={'body_02'} color={'ui-primary'}>
                                            {row.row}
                                        </Text>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                categories.map((category) => (
                    <CustomCollapsible
                        key={category.title}
                        trigger={category.title}
                        content={category.rows.map((row) => row)}
                    />
                ))
            )}
        </>
    );
};

export default withTranslation(namespacesRequired)(Categories);
