import React, { useContext, useEffect } from 'react';
import css from './Tutorial.module.scss';
import Banner from '@components/dashboard/Informations/Banner/Banner';
import Step from '@components/dashboard/Informations/Section-tutorial/Step/Step';
import { useTranslation } from '@i18n';
import InformationsContext from '@components/dashboard/context/informations/InformationsContext';
import InformationsService from '@services/domain/InformationsService';
import { useToasts } from 'react-toast-notifications';

type TutorialProps = {
    user: { partnerUniq: string };
};

const Tutorial = ({ user }: TutorialProps) => {
    const { t } = useTranslation('informations');
    const { addToast } = useToasts();

    const informationsContext = useContext(InformationsContext);
    const { getTutorial, updateTutorial, tutorial, isFetching, error, showNotificationSuccess } = informationsContext;

    useEffect(() => {
        getTutorial(user.partnerUniq);
    }, [getTutorial, user.partnerUniq]);

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

    const onUpdateTutorial = (body) => {
        updateTutorial(body);
    };

    const onResetTutorial = (body) => {
        InformationsService.resetTutorial(body)
            .then(() => getTutorial(user.partnerUniq))
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
                        partnerUniq={user.partnerUniq}
                        isFetching={isFetching}
                    />
                ))}
        </div>
    );
};

export default Tutorial;
