import React from 'react';
import css from './Tutorial.module.scss';
import Banner from '@components/dashboard/Informations/Banner/Banner';
import Step from '@components/dashboard/Informations/Step/Step';
import { useTranslation } from '@i18n';

const Tutorial = () => {
    const { t } = useTranslation('informations');

    const mockStep = [
        {
            name: t('informations:tutorial.step-one.step'),
            title: t('informations:tutorial.step-one.title'),
            desc: t('informations:tutorial.step-one.desc'),
        },
        {
            name: t('informations:tutorial.step-two.step'),
            title: t('informations:tutorial.step-two.title'),
            desc: t('informations:tutorial.step-two.desc'),
        },
        {
            name: t('informations:tutorial.step-three.step'),
            title: t('informations:tutorial.step-three.title'),
            desc: t('informations:tutorial.step-three.desc'),
        },
    ];

    return (
        <div className={css.tutorial}>
            <Banner text={t('informations:tutorial.banner.text')} />

            {mockStep.map((step) => {
                return <Step key={step.name} name={step.name} title={step.title} desc={step.desc} />;
            })}
        </div>
    );
};

export default Tutorial;
