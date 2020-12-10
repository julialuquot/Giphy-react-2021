import React, { useState, useEffect } from 'react';
import css from './Partners.module.scss';
import PartnerCard from '@components/dashboard/Administrator/PartnerCard';
import { useTranslation } from '@i18n';
import ConfirmGoOnLine from '@components/common/Modals/ConfirmGoOnLine/ConfirmGoOnLine';
import PartnersService from '@services/domain/PartnersService';
import { useToasts } from 'react-toast-notifications';

const Partners = () => {
    const { t } = useTranslation('dashboard-partners');
    const { addToast } = useToasts();

    const [open, setOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState({ uniq: '', active: null });
    const [partnersList, setPartnersList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        PartnersService.getAllPartners()
            .then((res) => setPartnersList(res.data))
            .then(() => setIsLoading(false))
            .catch((error) =>
                addToast(t(`common:errors.${error}`), {
                    appearance: 'error',
                    autoDismiss: true,
                }),
            );
    }, [addToast, t]);

    const onsuspend = () => {
        const body = {
            partnerUniq: selectedPartner.uniq,
            suspend: selectedPartner.active,
        };

        setIsLoading(true);

        PartnersService.suspendPartner(body)
            .then((res) =>
                addToast(t(`common:success.${res.data}`), {
                    appearance: 'success',
                    autoDismiss: true,
                }),
            )
            .then(() => setIsLoading(false))
            .catch((error) =>
                addToast(t(`common:errors.${error.message}`), {
                    appearance: 'error',
                    autoDismiss: true,
                }),
            )
            .finally(() => setOpen(false));
    };

    const onReactive = () => {
        const body = {
            partnerUniq: selectedPartner.uniq,
            activate: !selectedPartner.active,
        };

        setIsLoading(true);
        PartnersService.activatePartner(body)
            .then((res) =>
                addToast(t(`common:success.${res.data}`), {
                    appearance: 'success',
                    autoDismiss: true,
                }),
            )
            .then(() => setIsLoading(false))
            .catch((error) =>
                addToast(t(`common:errors.${error.message}`), {
                    appearance: 'error',
                    autoDismiss: true,
                }),
            )
            .finally(() => setOpen(false));
    };

    return (
        <div className={css.partners}>
            <ConfirmGoOnLine
                isVisible={open}
                onHide={() => setOpen(false)}
                onConfirm={() => (selectedPartner?.active ? onsuspend() : onReactive())}
                title={
                    selectedPartner?.active
                        ? t('dashboard-partners:modal.title-suspend')
                        : t('dashboard-partners:modal.title-reactivate')
                }
                text={t('dashboard-partners:modal.text')}
                confirmLabel={
                    selectedPartner?.active
                        ? t('dashboard-partners:modal.suspend')
                        : t('dashboard-partners:modal.reactivate')
                }
                cancelLabel={t('dashboard-partners:modal.cancel')}
                isLoading={isLoading}
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
                {partnersList
                    .filter((partner) => partner.verificationStatus === 0)
                    .map((partner) => (
                        <>
                            <PartnerCard
                                key={partner.uniq}
                                uniq={partner.uniq}
                                name={partner.name}
                                lastModification={partner.lastModification}
                                color={partner.color}
                                logo={partner.logo}
                                verificationStatus={partner.verificationStatus}
                                verificationResponsible={partner.verificationResponsible}
                                onOpenModal={(value) => setOpen(value)}
                                onSelectPartner={(uniq, active) => setSelectedPartner({ uniq, active })}
                                active={partner.active}
                            />
                        </>
                    ))}
            </div>
            <h3>{t('dashboard-partners:pending-partner')}</h3>
            <div className={css.partners__grid}>
                {partnersList
                    .filter((partner) => partner.verificationStatus === 1)
                    .map((partner) => (
                        <>
                            <PartnerCard
                                key={partner.name}
                                uniq={partner.uniq}
                                name={partner.name}
                                lastModification={partner.lastModification}
                                color={partner.color}
                                logo={partner.logo}
                                verificationStatus={partner.verificationStatus}
                                verificationResponsible={partner.verificationResponsible}
                                onOpenModal={(value) => setOpen(value)}
                                onSelectPartner={(uniq, active) => setSelectedPartner(uniq, active)}
                                active={partner.active}
                            />
                        </>
                    ))}
            </div>
            <h3>{t('dashboard-partners:list-partner')}</h3>
            <div className={css.partners__grid}>
                {partnersList.map((partner) => (
                    <>
                        <PartnerCard
                            key={partner.name}
                            uniq={partner.uniq}
                            name={partner.name}
                            lastModification={partner.lastModification}
                            color={partner.color}
                            logo={partner.logo}
                            verificationStatus={partner.verificationStatus}
                            verificationResponsible={partner.verificationResponsible}
                            onOpenModal={(value) => setOpen(value)}
                            onSelectPartner={(uniq, active) => setSelectedPartner(uniq, active)}
                            active={partner.active}
                        />
                    </>
                ))}
            </div>
        </div>
    );
};
export default Partners;
