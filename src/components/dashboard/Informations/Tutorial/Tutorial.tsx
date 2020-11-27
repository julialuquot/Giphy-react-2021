import React from 'react';
import css from './Tutorial.module.scss';
import Banner from '@components/dashboard/Informations/Banner/Banner';
import Step from '@components/dashboard/Informations/Step/Step';
import { useTranslation } from '@i18n';

const Tutorial = () => {
    const { t } = useTranslation('informations');

    return (
        <div className={css.tutorial}>
            <Banner text={t('informations:tutorial.banner.text')} />

            {[...new Array(3)].map((_, i) => (
                <Step
                    key={i}
                    order={i + 1}
                    name={t('informations:tutorial.step.step', { step: i + 1 })}
                    title={t('informations:tutorial.step.title')}
                    desc={t('informations:tutorial.step.desc')}
                />
            ))}
        </div>
    );
};

export default Tutorial;
