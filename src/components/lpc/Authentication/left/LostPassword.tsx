import React, { useState, useRef } from 'react';
import { Formik, Form } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import Button from '@components/common/Button/Button';
import Text from '@components/common/Text/Text';
import { passwordForgottenLinkGeneration } from '@validations/user';
import css from '../Authentication.scss';
import { useTranslation } from '@i18n';
import User from '@services/domain/User';
import AuthenticationPageContext from '@components/lpc/Authentication/AuthenticationPageContext';

const ErrorBloc = () => {
    const { t } = useTranslation('authentication');
    return (
        <div className={css.feedback}>
            <Text variant="hint" color="ui-error">
                {t('authentication:lost-password.email-not-found')}
            </Text>
        </div>
    );
};

type EmailFromProps = {
    setError: Function;
};

const EmailForm: React.FC<EmailFromProps> = ({ setError }: EmailFromProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const lastSubmitedValue = useRef('');
    const { t } = useTranslation('authentication');
    return (
        <AuthenticationPageContext.Consumer>
            {({ setPage, pages, setEmail }) => (
                <Formik
                    validationSchema={passwordForgottenLinkGeneration}
                    initialValues={{ email: '' }}
                    onSubmit={async (values) => {
                        setIsLoading(true);
                        User.sendEmail(values)
                            .then(() => {
                                setPage(pages.emailSentConfirmation);
                                setEmail(values.email);
                            })
                            .catch(() => setError(true))
                            .finally(() => setIsLoading(false));
                    }}
                    render={({ isSubmitting, values }) => {
                        if (!isSubmitting && lastSubmitedValue.current !== values.email) {
                            setError(false);
                            lastSubmitedValue.current = values.email;
                        }
                        return (
                            <Form className={css.form}>
                                <div className={css.input}>
                                    <Input
                                        name="email"
                                        type="email"
                                        label={t('authentication:lost-password.email')}
                                        placeholder={t('authentication:lost-password.email-label')}
                                    />
                                </div>

                                <div className={css.actions}>
                                    <Button size="large" variant="primary" isLoading={isLoading} mobileFullWidth>
                                        {t('authentication:lost-password.send')}
                                    </Button>
                                    <Button
                                        size="large"
                                        variant="tertiary"
                                        mobileFullWidth
                                        onClick={() => setPage(pages.login)}
                                    >
                                        {t('authentication:lost-password.back')}
                                    </Button>
                                </div>
                            </Form>
                        );
                    }}
                />
            )}
        </AuthenticationPageContext.Consumer>
    );
};

const LostPassword: React.FC = () => {
    const [error, setError] = useState(false);

    const { t } = useTranslation('authentication');
    return (
        <div className={css['lost-password__wrapper']}>
            <h3>{t('authentication:lost-password.title')}</h3>
            <div className={css.details}>
                <Text variant="body_02" color="ui-secondary">
                    {t('authentication:lost-password.details')}
                </Text>
            </div>

            <div className={css.divider} />
            {error && <ErrorBloc />}

            <EmailForm setError={setError} />
        </div>
    );
};

export default LostPassword;
