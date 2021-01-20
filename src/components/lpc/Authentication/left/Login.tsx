import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Input from '@components/common/Formik/FormikInputField';
import PasswordInput from '@components/common/Formik/FormikPaswordInputField';
import Button from '@components/common/Button/Button';
import Checkbox from '@components/common/Formik/FormikCheckBox';
import Text from '@components/common/Text/Text';
import { signIn } from '@validations/user';
import css from '../Authentication.scss';
import { useTranslation } from '@i18n';
import Xconnect from '@components/common/Xconnect/Xconnect';
import User from '@services/domain/Lpc/User';
import AuthenticationPageContext from '@components/lpc/Authentication/AuthenticationPageContext';

const LostPasswordLink: React.FC = () => {
    const { t } = useTranslation('authentication');
    return (
        <AuthenticationPageContext.Consumer>
            {({ setPage, pages }) => (
                <div className={css['lost-password']} onClick={() => setPage(pages.lostPassword)}>
                    <Text variant="caption_00" color="ui-secondary">
                        {t('authentication:login.lost-password')}
                    </Text>
                </div>
            )}
        </AuthenticationPageContext.Consumer>
    );
};

const LoginForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation('authentication');
    return (
        <Formik
            validationSchema={signIn}
            initialValues={{ email: 'a@a.com', password: '123234', stayConnected: false }}
            onSubmit={async (values) => {
                try {
                    const token = await User.login(values);
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
                        />
                        <LostPasswordLink />
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

const Login: React.FC = () => {
    const { t } = useTranslation('authentication');
    return (
        <div className={css.login}>
            <h3>{t('authentication:login.title')}</h3>
            <div className={css.divider} />
            <Xconnect />
            <LoginForm />
            <div className={css.create_account}>
                <Text variant="body_02" color="ui-secondary">
                    {t('authentication:login.create-account-text')}
                </Text>
                <Button size="large" variant="tertiary">
                    {t('authentication:login.create-account-button')}
                </Button>
            </div>
        </div>
    );
};

export default Login;
