import React from 'react';
import Head from 'next/head';
import Tilt from 'react-tilt';
import { useTranslation } from '@i18n';
import Layout from '@components/lpc/layout/Layout';
import MainHeading from '@components/common/Heading/MainHeading/MainHeading';
import BrandsChoice from '@components/lpc/PaymentOptions/GiftCard/BrandsChoice/BrandsChoice';
import Box from '@components/lpc/PaymentOptions/GiftCard/Box/Box';
import FaqCollapsible from '@components/common/FaqCollapsible/FaqCollapsible';
import css from './GiftCardPage.module.scss';

const GiftCardPage = () => {
    const { t } = useTranslation('lpc-gift-card');

    const tiltOptions = {
        reverse: false, // reverse the tilt direction
        max: 25, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.07, // 2 = 200%, 1.5 = 150%, etc..
        speed: 5000, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
    };

    // TODO remove fake data
    const faq = [
        {
            question: t('lpc-gift-card:faq.question_0'),
            answer: t('lpc-gift-card:faq.answer_0'),
        },
        {
            question: t('lpc-gift-card:faq.question_1'),
            answer: t('lpc-gift-card:faq.answer_1'),
        },
        {
            question: t('lpc-gift-card:faq.question_2'),
            answer: t('lpc-gift-card:faq.answer_2'),
        },
    ];

    return (
        <Layout>
            <Head>
                <title>{t('lpc-gift-card:meta-title')}</title>
            </Head>
            <div className={css.giftCardPageWrapper}>
                <div className={css.header}>
                    <MainHeading
                        title={t('lpc-gift-card:title')}
                        subtitle={t('lpc-gift-card:subtitle')}
                        paragraph={t('lpc-gift-card:description')}
                    />
                    <Tilt className={css.tilt} options={tiltOptions}>
                        <div className={css.tilt__lpc}>
                            <h1>LPC</h1>
                        </div>
                    </Tilt>
                </div>
                <BrandsChoice />
                <Box />
                <FaqCollapsible
                    title={t('lpc-gift-card:faq.title')}
                    subtitle={t('lpc-gift-card:faq.subtitle')}
                    cta={t('lpc-gift-card:faq.cta')}
                    content={faq}
                />
            </div>
        </Layout>
    );
};

export default GiftCardPage;
