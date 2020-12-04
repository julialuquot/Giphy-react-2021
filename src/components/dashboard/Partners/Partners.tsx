import React, { useState } from 'react';
import css from './Partners.module.scss';
import PartnerCard from '@components/dashboard/Administrator/PartnerCard';
import { useTranslation } from '@i18n';
import ConfirmGoOnLine from '@components/common/Modals/ConfirmGoOnLine/ConfirmGoOnLine';
// import ConfirmModification from '@components/common/Modals/ConfirmModification/ConfirmModification';

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

    const [open, setOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState(null);

    const onConfirm = () => {
        // TODO connect to webservice !
        // eslint-disable-next-line no-console
        console.log('@@@@@@@ je confirm', selectedPartner);
    };

    return (
        <div className={css.partners}>
            <ConfirmGoOnLine
                isVisible={open}
                onHide={() => setOpen(false)}
                onConfirm={() => onConfirm()}
                title={t('dashboard-partners:modal.title')}
                text={t('dashboard-partners:modal.text')}
                confirmLabel={t('dashboard-partners:modal.confirm')}
                cancelLabel={t('dashboard-partners:modal.cancel')}
            />
            {/* TODO just for testing purpose , must be in preview page */}
            {/* <ConfirmModification */}
            {/*    isVisible={open} */}
            {/*    onHide={() => setOpen(false)} */}
            {/*    onConfirm={() => onConfirm()} */}
            {/*    title={t('dashboard-partners:modal-modification-confirmation.title')} */}
            {/*    text={t('dashboard-partners:modal-modification-confirmation.text')} */}
            {/*    confirmLabel={t('dashboard-partners:modal-modification-confirmation.confirm')} */}
            {/*    cancelLabel={t('dashboard-partners:modal-modification-confirmation.cancel')} */}
            {/* /> */}
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
                                onOpenModal={(value) => setOpen(value)}
                                onSelectPartner={(partner) => setSelectedPartner(partner)}
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
                                onOpenModal={(value) => setOpen(value)}
                                onSelectPartner={(partner) => setSelectedPartner(partner)}
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
                                onOpenModal={(value) => setOpen(value)}
                                onSelectPartner={(partner) => setSelectedPartner(partner)}
                            />
                        </>
                    ))}
            </div>
        </div>
    );
};

export default Partners;
