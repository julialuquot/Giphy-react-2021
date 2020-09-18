import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import PasswordInput from '@components/common/Formik/FormikPaswordInputField';
import Button from '@components/common/Button/Button';
import Checkbox from '@components/common/Formik/FormikCheckBox';
import Text from '@components/common/Text/Text';
import { signin } from '@validations/user';
import css from '../Authentication.scss';
import { withTranslation } from '@i18n';
import Xconnect from '@components/common/Xconnect/Xconnect';
import { login } from '@services/User';

type LoginProps = {
    t: (string) => string;
};

const LoginForm = ({ t }: LoginProps) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Formik
            validationSchema={signin}
            initialValues={{ email: 'a@a.com', password: '123234', stayConnected: false }}
            onSubmit={async (values) => {
                try {
                    const token = await login(values);
                    // eslint-disable-next-line no-console
                    console.log(token);
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.log(e);
                }
                setIsLoading(true);
                setIsLoading(false);
            }}
            render={() => (
                <Form className={css.form}>
                    <div className={css.input}>
                        <Input
                            name="email"
                            type="email"
                            label={t('authentication:login.email')}
                            placeholder={t('authentication:login.email-label')}
                        />
                    </div>
                    <div className={css.input}>
                        <PasswordInput
                            name="password"
                            type="password"
                            label={t('authentication:login.password')}
                            placeholder={t('authentication:login.password-label')}
                            iconPosition="right"
                            icon="/icons/eye-outline.svg"
                        />
                    </div>
                    <div className={css.input}>
                        <Checkbox name="stayConnected">{t('authentication:login.remember-me')} </Checkbox>
                    </div>

                    <Button mobileFullWidth={true} variant="primary" size="large" type="submit" isLoading={isLoading}>
                        {t('authentication:login.connect-button')}
                    </Button>
                </Form>
            )}
        />
    );
};

const Login: React.FC<LoginProps> = ({ t }: LoginProps) => {
    return (
        <div className={css.login}>
            <h3>{t('authentication:login.title')}</h3>
            <div className={css.divider} />
            <Xconnect />
            <LoginForm t={t} />
            <div className={css.create_account}>
                <Text variant="body_02" color="ui-secondary">
                    {t('authentication:login.create-account-text')}
                </Text>
                <Button size="large" variant="secondary">
                    {t('authentication:login.create-account-button')}
                </Button>
            </div>
        </div>
    );
};

export default withTranslation('authentication')(Login);
