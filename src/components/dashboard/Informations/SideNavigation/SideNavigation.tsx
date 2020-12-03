import React, { useState, useEffect } from 'react';
import css from './SideNavigation.module.scss';
import { useTranslation } from '@i18n';
import Button from '@components/common/Button/Button';
import Switch from '@components/common/Switch/Switch';
import ConfirmGoOnLine from '@components/common/Modals/ConfirmGoOnLine/ConfirmGoOnLine';
import InformationsService from '@services/domain/InformationsService';

type SideNavigationProps = {
    onStepChange: (number) => void;
    user: object;
};

const SideNavigation = ({ onStepChange, user }: SideNavigationProps) => {
    const { t } = useTranslation('dashboard-informations');

    const [activeStep, setActiveStep] = useState(0);
    const [, setIsSwitchActive] = useState(false);
    const [open, setOpen] = useState(false);

    const onSetActiveStep = (step) => {
        setActiveStep(step);
    };

    useEffect(() => {
        onStepChange(activeStep);
    }, [activeStep, onStepChange]);

    const onConfirm = () => {
        // TODO connect to webservice
        // eslint-disable-next-line no-console
        // @ts-ignore
        const body = { merchantUniq: user.merchantUniq, goOnline: true };
        InformationsService.goOnLine(body)
            .then((res) => res)
            .catch((err) => err);
    };

    return (
        <>
            <ConfirmGoOnLine
                isVisible={open}
                onHide={() => setOpen(false)}
                onConfirm={() => onConfirm()}
                title={t('dashboard-informations:modal.title')}
                text={t('dashboard-informations:modal.text')}
                confirmLabel={t('dashboard-informations:btn.confirm')}
                cancelLabel={t('dashboard-informations:btn.cancel')}
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
                    <Button variant="secondary" size="medium" type={'button'}>
                        {t('dashboard-informations:btn.preview')}
                    </Button>
                    <Button
                        onClick={() => setOpen(true)}
                        margin={'10px 0 16px 0'}
                        variant="primary"
                        size="medium"
                        type="submit"
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
