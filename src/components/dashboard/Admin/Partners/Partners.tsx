import React, { useState, useEffect, useContext } from 'react';
import css from './Partners.module.scss';
import PartnerCard from '@components/dashboard/Admin/PartnerCard/PartnerCard';
import { useTranslation } from '@i18n';
import ConfirmModal from '@components/common/Modals/ConfirmModal/ConfirmModal';
import { useToasts } from 'react-toast-notifications';
import PartnersContext from '@components/dashboard/context/partners/PartnersContext';

const Partners = () => {
    const { t } = useTranslation('dashboard-partners');
    const { addToast } = useToasts();

    const partnersContext = useContext(PartnersContext);
    const {
        getAllPartners,
        suspendPartner,
        activatePartner,
        partners,
        isFetching,
        error,
        showNotificationSuccess,
    } = partnersContext;

    const [open, setOpen] = useState(false);
    const [selectedPartner, setSelectedPartner] = useState({ uniq: '', active: null });

    const onsuspend = async () => {
        const body = {
            partnerUniq: selectedPartner.uniq,
            suspend: selectedPartner.active,
        };
        await suspendPartner(body);
        await setOpen(false);
    };

    const onReactive = async () => {
        const body = {
            partnerUniq: selectedPartner.uniq,
            activate: !selectedPartner.active,
        };
        await activatePartner(body);
        await setOpen(false);
    };

    useEffect(() => {
        getAllPartners();
    }, [getAllPartners]);

    useEffect(() => {
        error &&
            addToast(t(`common:errors.${error}`), {
                appearance: 'error',
                autoDismiss: true,
            });
    }, [addToast, error, t]);

    useEffect(() => {
        showNotificationSuccess.suspendPartner &&
            addToast(t(`common:success.PARTNER_SUSPEND`), {
                appearance: 'success',
                autoDismiss: true,
            });
    }, [addToast, showNotificationSuccess.suspendPartner, t]);

    useEffect(() => {
        showNotificationSuccess.activatePartner &&
            addToast(t(`common:success.PARTNER_ACTIVATED`), {
                appearance: 'success',
                autoDismiss: true,
            });
    }, [addToast, showNotificationSuccess.activatePartner, t]);

    return (
        <div className={css.partners}>
            <ConfirmModal
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
                isLoading={isFetching}
                customConfirmButton={selectedPartner?.active ? css.customSuspendButton : css.customActiveButton}
            />

            <h3>{t('dashboard-partners:checking-partner')}</h3>
            <div className={css.partners__grid}>
                {partners &&
                    partners.length > 0 &&
                    partners
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
                {partners &&
                    partners.length > 0 &&
                    partners
                        .filter((partner) => partner.verificationStatus === 1)
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
            <h3>{t('dashboard-partners:list-partner')}</h3>
            <div className={css.partners__grid}>
                {partners &&
                    partners.length > 0 &&
                    partners.map((partner) => (
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
        </div>
    );
};
export default Partners;
