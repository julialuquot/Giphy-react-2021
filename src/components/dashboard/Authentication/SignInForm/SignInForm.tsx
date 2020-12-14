import React, { useContext, useEffect } from 'react';
import { useTranslation } from '@i18n';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { signIn } from '@validations/user';
import css from '@components/dashboard/Authentication/Authentication.scss';
import AuthContext from '@components/dashboard/context/auth/AuthContext';
import Input from '@components/common/Formik/FormikInputField';
import PasswordInput from '@components/common/Formik/FormikPaswordInputField';
import Text from '@components/common/Text/Text';
import Checkbox from '@components/common/Formik/FormikCheckBox';
import Button from '@components/common/Button/Button';
import { getRoute, ROUTE } from '@services//http/Route';
import { useToasts } from 'react-toast-notifications';

const SignInForm = () => {
    const authContext = useContext(AuthContext);
    const router = useRouter();
    const { t } = useTranslation('authentication');
    const { addToast } = useToasts();
    const { userSignIn, isFetching, getUser, user, error } = authContext;

    const initialValues = {
        email: 'merchandclass1@yopmail.com',
        password: 'Aa123456!',
        stayConnected: true,
    };

    const onSubmit = async (values) => {
        await userSignIn(values);
        await getUser();
    };

    useEffect(() => {
        error &&
            addToast(t(`common:errors.${error}`), {
                appearance: 'error',
                autoDismiss: true,
            });
    }, [addToast, error, t]);

    useEffect(() => {
        getUser();
    }, [getUser]);

    useEffect(() => {
        user && router.push(getRoute(ROUTE.DASHBOARD.STATS, user.partnerUniq));
    }, [router, user]);

    return (
        <Formik validationSchema={signIn} initialValues={initialValues} onSubmit={(values) => onSubmit(values)}>
            {() => (
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

                        <div className={css['lost-password']}>
                            <Text variant="caption_02" color="ui-secondary">
                                {t('authentication:login.lost-password')}
                            </Text>
                        </div>
                    </div>
                    <div className={css.input}>
                        <Checkbox name="stayConnected">{t('authentication:login.remember-me')}</Checkbox>
                    </div>

                    <Button mobileFullWidth={true} variant="primary" size="large" type="submit" isLoading={isFetching}>
                        {t('authentication:login.connect-button')}
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SignInForm;
