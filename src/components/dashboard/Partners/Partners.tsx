import React from 'react';
import css from './Partners.module.scss';
import PartnerCard from '@components/dashboard/Administrator/PartnerCard';
import { useTranslation } from '@i18n';

const mockPartners = [
    {
        name: 'A Verifier',
        color: '#1482c2',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 01 janv.',
        status: 'checking',
    },
    {
        name: 'A Verifier',
        color: '#1482c2',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 01 janv.',
        status: 'checking',
    },
    {
        name: 'A Verifier',
        color: '#1482c2',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 01 janv.',
        status: 'checking',
    },
    {
        name: 'En attente',
        color: '#EB853D',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 23 oct.',
        status: 'pending',
    },
    {
        name: 'En attente',
        color: '#EB853D',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 23 oct.',
        status: 'pending',
    },
    {
        name: 'Actif',
        color: '#2BE283',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 25 dec.',
        status: 'active',
    },
    {
        name: 'Actif',
        color: '#2BE283',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 25 dec.',
        status: 'active',
    },
    {
        name: 'Actif',
        color: '#2BE283',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 25 dec.',
        status: 'active',
    },
    {
        name: 'Actif',
        color: '#2BE283',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 25 dec.',
        status: 'active',
    },
    {
        name: 'Actif',
        color: '#2BE283',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 25 dec.',
        status: 'active',
    },
    {
        name: 'Actif',
        color: '#2BE283',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 25 dec.',
        status: 'active',
    },
    {
        name: 'Actif',
        color: '#2BE283',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: 'Modifié le 25 dec.',
        status: 'active',
    },
    {
        name: 'Actif',
        color: '#2BE283',
        logo: 'https://s3-eu-west-1.amazonaws.com/preprod.lepotcommun/merchant-dashbaord/bj9c4mjwsl.svg',
        editOn: '25 dec.',
        status: 'active',
    },
];

const Partners = () => {
    const { t } = useTranslation('dashboard-partners');

    // TODO Connect to WS et remove fake Db!!

    return (
        <div className={css.partners}>
            <h3>{t('dashboard-partners:checking-partner')}</h3>

            <div className={css.partners__grid}>
                {mockPartners
                    .filter((partner) => partner.status === 'checking')
                    .map((partner) => (
                        <>
                            <PartnerCard
                                key={partner.name}
                                title={partner.name}
                                subtitle={partner.editOn}
                                color={partner.color}
                                img={partner.logo}
                                status={partner.status}
                            />
                        </>
                    ))}
            </div>

            <h3>{t('dashboard-partners:pending-partner')}</h3>
            <div className={css.partners__grid}>
                {mockPartners
                    .filter((partner) => partner.status === 'pending')
                    .map((partner) => (
                        <>
                            <PartnerCard
                                key={partner.name}
                                title={partner.name}
                                subtitle={partner.editOn}
                                color={partner.color}
                                img={partner.logo}
                                status={partner.status}
                            />
                        </>
                    ))}
            </div>

            <h3>{t('dashboard-partners:list-partner')}</h3>
            <div className={css.partners__grid}>
                {mockPartners
                    .filter((partner) => partner.status === 'active')
                    .map((partner) => (
                        <>
                            <PartnerCard
                                key={partner.name}
                                title={partner.name}
                                subtitle={partner.editOn}
                                color={partner.color}
                                img={partner.logo}
                                status={partner.status}
                            />
                        </>
                    ))}
            </div>
        </div>
    );
};

export default Partners;
