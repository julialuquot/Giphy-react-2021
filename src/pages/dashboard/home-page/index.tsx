import React from 'react';
import css from './home-page.module.scss';
import { withTranslation } from '@i18n';
import PartnerCard from '@components/dashboard/Administrator/PartnerCard';

const namespacesRequired = ['home-page'];

const Index = () => {
    return (
        <div className={css.wrapper}>
            <PartnerCard
                cardTitle={'title'}
                cardColor={'#1482c2'}
                cardImg={'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg'}
                cardSubtitle={'subtitle'}
            />
        </div>
    );
};

export default withTranslation(namespacesRequired)(Index);
