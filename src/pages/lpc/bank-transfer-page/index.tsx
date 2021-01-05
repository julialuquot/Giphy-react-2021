import React from 'react';
import Head from 'next/head';
import css from './BankTransferPage.scss';
import Layout from '@components/lpc/layout/Layout';
import { useTranslation } from '@i18n';
import Header from '@components/lpc/PaymentOptions/BankTransfer/Header/Header';
import Comm from '@components/lpc/PaymentOptions/BankTransfer/Comm/Comm';
import FaqCollapsible from '@components/common/FaqCollapsible/FaqCollapsible';

const BankTransferPage = () => {
    const { t } = useTranslation('lpc-bank-transfer');

    // TODO remove fake data
    const faq = [
        {
            question: t('lpc-bank-transfer:faq.question-0'),
            answer: t('lpc-bank-transfer:faq.answer-0'),
        },
        {
            question: t('lpc-bank-transfer:faq.question-1'),
            answer: t('lpc-bank-transfer:faq.answer-1'),
        },
        {
            question: t('lpc-bank-transfer:faq.question-2'),
            answer: t('lpc-bank-transfer:faq.answer-2'),
        },
    ];

    const articles = [
        {
            title: t('lpc-bank-transfer:comm.articles.title-0'),
            desc: t('lpc-bank-transfer:comm.articles.desc-0'),
            imgSrc: '/front-static/images/card/article-0.png',
        },
        {
            title: t('lpc-bank-transfer:comm.articles.title-1'),
            desc: t('lpc-bank-transfer:comm.articles.desc-1'),
            imgSrc: '/front-static/images/card/article-1.png',
        },
        {
            title: t('lpc-bank-transfer:comm.articles.title-2'),
            desc: t('lpc-bank-transfer:comm.articles.desc-2'),
            imgSrc: '/front-static/images/card/article-2.png',
        },
        {
            title: t('lpc-bank-transfer:comm.articles.title-3'),
            desc: t('lpc-bank-transfer:comm.articles.desc-3'),
            imgSrc: '/front-static/images/card/article-3.png',
        },
    ];

    return (
        <Layout>
            <Head>
                <title>{t('lpc-bank-transfer:meta-title')}</title>
            </Head>

            <div className={css.bankTransferWrapper}>
                <Header />
                <Comm
                    title={t('lpc-bank-transfer:comm.title')}
                    subtitle={t('lpc-bank-transfer:comm.subtitle')}
                    articles={articles}
                />
                <FaqCollapsible
                    content={faq}
                    title={t('lpc-bank-transfer:faq.title')}
                    subtitle={t('lpc-bank-transfer:faq.subtitle')}
                    cta={t('lpc-bank-transfer:faq.cta')}
                />
            </div>
        </Layout>
    );
};

export default BankTransferPage;
