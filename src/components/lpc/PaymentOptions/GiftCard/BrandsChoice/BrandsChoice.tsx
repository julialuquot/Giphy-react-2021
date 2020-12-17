import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import { getRoute, ROUTE } from '@services/http/Route';
import BrandsGrid from './BrandsGrid/BrandsGrid';
import { brandsList } from '../fakeData';
import css from './BrandsChoice.module.scss';

const BrandsChoice = () => {
    const { t } = useTranslation('lpc-gift-card');

    return (
        <div className={css.brands}>
            <div className={css.brands__container}>
                <div className={css.brands__container__left}>
                    <h2>{t('lpc-gift-card:brands.title')}</h2>
                    <Text customClass={css.brands__container__left__txt} variant={'body_00'} color={'txt-primary'}>
                        {t('lpc-gift-card:brands.description')}
                    </Text>

                    <Link href={getRoute(ROUTE.LPC.PARTNERS, null)}>
                        <a>
                            <Button mobileFullWidth={true} variant={'primary'} size={'medium'}>
                                {t('lpc-gift-card:brands.see-list')}
                            </Button>
                        </a>
                    </Link>
                </div>

                <div className={css.brands__container__right}>
                    <BrandsGrid brandsList={brandsList} />
                </div>
            </div>
        </div>
    );
};

export default BrandsChoice;
