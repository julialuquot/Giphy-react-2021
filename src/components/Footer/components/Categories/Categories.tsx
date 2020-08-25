import React from 'react';
import css from './Categories.module.scss';
import Text from '@components/common/Text/Text';
import { withTranslation } from '@i18n';
import Link from 'next/link';

const namespacesRequired = ['footer'];

type GridProps = {};

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

    return (
        <div className={css.container}>
            {categories.map((category, index) => (
                <div key={index} className={css.container__col}>
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
    );
};

export default withTranslation(namespacesRequired)(Categories);
