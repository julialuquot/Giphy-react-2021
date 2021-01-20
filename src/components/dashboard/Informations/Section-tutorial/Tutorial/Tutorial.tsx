import React, { useContext, useEffect } from 'react';
import css from './Tutorial.module.scss';
import Banner from '@components/dashboard/Informations/Banner/Banner';
import Step from '@components/dashboard/Informations/Section-tutorial/Step/Step';
import { useTranslation } from '@i18n';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import InformationsService from '@services/domain/Dashboard/InformationsService';
import { useToasts } from 'react-toast-notifications';

type TutorialProps = {
    partnerUniq: string;
};

const Tutorial = ({ partnerUniq }: TutorialProps) => {
    const { t } = useTranslation('dashboard-informations');
    const { addToast } = useToasts();

    const informationsContext = useContext(InformationsContext);
    const {
        getTutorial,
        updateTutorial,
        tutorial,
        isFetching,
        error,
        showNotificationSuccess,
        getChanges,
    } = informationsContext;

    useEffect(() => {
        getTutorial(partnerUniq);
    }, [getTutorial, partnerUniq]);

    useEffect(() => {
        error &&
            addToast(t(`common:errors.${error}`), {
                appearance: 'error',
                autoDismiss: true,
            });
    }, [addToast, error, t]);

    useEffect(() => {
        showNotificationSuccess.updateTutorial &&
            addToast(t(`common:success.UPDATE_SUCCESS`), {
                appearance: 'success',
                autoDismiss: true,
            });
    }, [addToast, error, showNotificationSuccess.updateTutorial, t]);

    const onUpdateTutorial = async (body) => {
        await updateTutorial(body);
        getChanges(body.partnerUniq);
    };

    const onResetTutorial = (body) => {
        InformationsService.resetTutorial(body)
            .then(() => getTutorial(partnerUniq))
            .catch((err) => err);
    };

    return (
        <div className={css.tutorial}>
            <Banner text={t('dashboard-informations:tutorial.banner.text')} />

            {tutorial &&
                tutorial.map((tutorial) => (
                    <Step
                        key={tutorial.order}
                        order={tutorial.order}
                        title={tutorial.title?.fr}
                        description={tutorial.description?.fr}
                        imageDesktop={tutorial.imageDesktop}
                        imageMobile={tutorial.imageMobile}
                        onUpdateTutorial={(body) => onUpdateTutorial(body)}
                        onResetTutorial={(body) => onResetTutorial(body)}
                        partnerUniq={partnerUniq}
                        isFetching={isFetching}
                    />
                ))}
        </div>
    );
};

export default Tutorial;
