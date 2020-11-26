import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import PasswordInput from '@components/common/Formik/FormikPaswordInputField';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import css from '../Authentication.scss';
import User from '@services/domain/User';
import { passwordForgottenSubmitNewPassword } from '@validations/user';

type ChangePasswordprops = {
    uniqUP: string;
};

const ChangePasswordForm: React.FC<ChangePasswordprops> = ({ uniqUP }: ChangePasswordprops) => {
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation('authentication');

    return (
        <Formik
            validationSchema={passwordForgottenSubmitNewPassword}
            initialValues={{ password: '', passwordConfirmation: '' }}
            onSubmit={async (values) => {
                setIsLoading(true);
                User.changePassword({
                    passwordPE: values.password,
                    confirmPasswordPE: values.passwordConfirmation,
                    uniqUP: uniqUP,
                }).finally(() => setIsLoading(false));
            }}
            render={() => (
                <Form className={css.form}>
                    <div className={css.input}>
                        <PasswordInput
                            name="password"
                            type="password"
                            label={t('authentication:change-password.new-password-label')}
                            iconPosition="right"
                        />
                    </div>
                    <div className={css.input}>
                        <PasswordInput
                            name="passwordConfirmation"
                            type="password"
                            label={t('authentication:change-password.confirm-new-password-label')}
                            iconPosition="right"
                        />
                    </div>
                    <div className={css.actions}>
                        <Button
                            mobileFullWidth={true}
                            variant="primary"
                            size="large"
                            type="submit"
                            isLoading={isLoading}
                        >
                            {t('authentication:change-password.modify')}
                        </Button>
                        <Button mobileFullWidth={true} variant="tertiary" size="large">
                            {t('authentication:change-password.back')}
                        </Button>
                    </div>
                </Form>
            )}
        />
    );
};

const ChangePassword: React.FC<ChangePasswordprops> = ({ uniqUP }: ChangePasswordprops) => {
    const { t } = useTranslation('authentication');

    return (
        <div className={css['change-password']}>
            <h3>{t('authentication:change-password.title')}</h3>
            <br />
            <Text variant="body_02" color="ui-secondary">
                {t('authentication:change-password.details')}
            </Text>
            <div className={css.divider} />
            <ChangePasswordForm uniqUP={uniqUP} />
        </div>
    );
};

export default ChangePassword;
