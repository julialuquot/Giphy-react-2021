import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from '@i18n';
import Button from '@components/common/Button/Button';
import Switch from '@components/common/Switch/Switch';
import ConfirmModal from '@components/common/Modals/ConfirmModal/ConfirmModal';
import { getRoute, ROUTE } from '@services/http/Route';
import InformationsService from '@services/domain/InformationsService';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import css from './SideNavigation.module.scss';

type SideNavigationProps = {
    onStepChange: (number) => void;
    partnerUniq: string;
};

const SideNavigation = ({ onStepChange, partnerUniq }: SideNavigationProps) => {
    const { t } = useTranslation('dashboard-informations');
    const { addToast } = useToasts();
    const informationsContext = useContext(InformationsContext);

    const { hasChanges, getChanges } = informationsContext;

    const [activeStep, setActiveStep] = useState(0);
    const [, setIsSwitchActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSetActiveStep = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        getChanges(partnerUniq);
    }, [getChanges, hasChanges, partnerUniq]);

    useEffect(() => {
        onStepChange(activeStep);
    }, [activeStep, onStepChange]);

    const onConfirm = () => {
        const body = { partnerUniq: partnerUniq, goOnline: true };
        setIsLoading(true);
        InformationsService.goOnLine(body)
            .then(
                (res) =>
                    res.status === 200 &&
                    addToast(t(`common:success.GO_ONLINE_SUCCESS`), {
                        appearance: 'success',
                        autoDismiss: true,
                    }),
            )
            .then(() => getChanges(partnerUniq))
            .then(() => setIsLoading(false))
            .catch((error) =>
                addToast(t(`common:errors.${error}`), {
                    appearance: 'error',
                    autoDismiss: true,
                }),
            )
            .finally(() => setOpen(false));
    };

    return (
        <>
            <ConfirmModal
                isVisible={open}
                onHide={() => setOpen(false)}
                onConfirm={() => onConfirm()}
                title={t('dashboard-informations:modal.title')}
                text={t('dashboard-informations:modal.text')}
                confirmLabel={t('dashboard-informations:btn.confirm')}
                cancelLabel={t('dashboard-informations:btn.cancel')}
                isLoading={isLoading}
            />

            <div className={css.side}>
                <div className={css.side__nav}>
                    <p
                        className={`${css.side__nav__tag} ${activeStep === 0 && css.side__nav__tag__active}`}
                        onClick={() => onSetActiveStep(0)}
                    >
                        {t('dashboard-informations:side-nav.brand')}
                    </p>
                    <p
                        className={`${css.side__nav__tag} ${activeStep === 1 && css.side__nav__tag__active}`}
                        onClick={() => onSetActiveStep(1)}
                    >
                        {t('dashboard-informations:side-nav.tutorial')}
                    </p>
                    <p
                        className={`${css.side__nav__tag} ${activeStep === 2 && css.side__nav__tag__active}`}
                        onClick={() => onSetActiveStep(2)}
                    >
                        {t('dashboard-informations:side-nav.products')}
                    </p>
                    <Switch
                        customClass={css.side__nav__tag__switch}
                        defaultOn={false}
                        onChange={(bool) => setIsSwitchActive(bool)}
                    />
                </div>

                <div className={css.side__btn}>
                    <Link href={getRoute(ROUTE.DASHBOARD.PREVIEW, partnerUniq)}>
                        <a>
                            <Button variant="secondary" size="medium" type={'button'}>
                                {t('dashboard-informations:btn.preview')}
                            </Button>
                        </a>
                    </Link>
                    <Button
                        onClick={() => setOpen(true)}
                        margin={'10px 0 16px 0'}
                        variant="primary"
                        size="medium"
                        type="submit"
                        customClass={!hasChanges ? css.customDisabled : ''}
                    >
                        {t('dashboard-informations:btn.upload')}
                    </Button>
                </div>
                <p className={css.warning}> {t('dashboard-informations:side-nav.warning')}</p>
            </div>
        </>
    );
};

export default SideNavigation;
