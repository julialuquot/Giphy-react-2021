import React from 'react';
import css from './SpendingWay.module.scss';
import { withTranslation } from '@i18n';
import Text from '@components/common/Text/Text';
import Link from 'next/link';

const namespacesRequired = ['home-page'];

type SpendingWayProps = {
    t: (string) => string;
};

const Landing3 = ({ t }: SpendingWayProps) => {
    return (
        <div className={css.spending_way}>
            <Text variant={'tagline'} color={'brand-primary'}>
                {t('home-page:landing-3.spending-way.title-1')}
            </Text>
            <Link href="#">
                <a className={css.spending_way__cta}>
                    <h6> {t('home-page:landing-3.spending-way.cta-1')}</h6>
                </a>
            </Link>
            <Link href="#">
                <a className={css.spending_way__cta}>
                    <h6> {t('home-page:landing-3.spending-way.cta-2')}</h6>
                </a>
            </Link>
            <Text variant={'tagline'} color={'brand-primary'}>
                {t('home-page:landing-3.spending-way.title-2')}
            </Text>
            <Link href="#">
                <a className={css.spending_way__cta}>
                    <h6> {t('home-page:landing-3.spending-way.cta-3')}</h6>
                </a>
            </Link>
        </div>
    );
};

export default withTranslation(namespacesRequired)(Landing3);
