import React, { useContext, useEffect } from 'react';
import css from './Tutorial.module.scss';
import Banner from '@components/dashboard/Informations/Banner/Banner';
import Step from '@components/dashboard/Informations/Step/Step';
import { useTranslation } from '@i18n';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import InformationsService from '@services/domain/InformationsService';

type TutorialProps = {
    user: { merchantUniq: string };
};

const Tutorial = ({ user }: TutorialProps) => {
    const { t } = useTranslation('informations');

    const informationsContext = useContext(InformationsContext);
    const { getTutorial, updateTutorial, tutorial, isFetching } = informationsContext;

    useEffect(() => {
        getTutorial(user.merchantUniq);
    }, [getTutorial, user.merchantUniq]);

    const onUpdateTutorial = (body) => {
        updateTutorial(body);
    };

    const onResetTutorial = (body) => {
        InformationsService.resetTutorial(body)
            .then(() => getTutorial(user.merchantUniq))
            .catch((err) => err);
    };

    return (
        <div className={css.tutorial}>
            <Banner text={t('informations:tutorial.banner.text')} />

            {!isFetching &&
                tutorial.length > 0 &&
                tutorial.map((tutorial) => (
                    <Step
                        key={tutorial.order}
                        order={tutorial.order}
                        title={tutorial.title}
                        description={tutorial.description}
                        imageDesktop={tutorial.imageDesktop}
                        imageMobile={tutorial.imageMobile}
                        onUpdateTutorial={(body) => onUpdateTutorial(body)}
                        onResetTutorial={(body) => onResetTutorial(body)}
                        merchantUniq={user.merchantUniq}
                    />
                ))}
        </div>
    );
};

export default Tutorial;
