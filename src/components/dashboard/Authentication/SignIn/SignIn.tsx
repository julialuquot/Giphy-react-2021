import React from 'react';
import css from '../Authentication.scss';
import { useTranslation } from '@i18n';
import SignInForm from '@components/dashboard/Authentication/SignInForm/SignInForm';

const SignIn = () => {
    const { t } = useTranslation('authentication');
    return (
        <div className={css.signIn__wrapper}>
            <div className={css.login}>
                <h3>{t('authentication:login.title-dashboard')}</h3>
                <SignInForm />
            </div>
        </div>
    );
};

export default SignIn;
