import React from 'react';
import Text from '@components/common/Text/Text';
import css from '../Authentication.scss';
import { useTranslation } from '@i18n';
import AuthenticationCode from '@components/common/AuthenticationCode/AuthenticationCode';

type PropsType = {
    phoneNumber: string;
};

const LoginConfirmation = ({ phoneNumber }: PropsType) => {
    const { t } = useTranslation('authentication');
    return (
        <div className={css['login-confirmation__wrapper']}>
            <h3>{t('authentication:login-confirmation.title')}</h3>
            <Text variant="body_02" color="ui-secondary" customClass={css.details}>
                {`${t('authentication:login-confirmation.details')}${phoneNumber}`}
            </Text>
            <div className={css.divider}></div>
            <AuthenticationCode />
        </div>
    );
};

export default LoginConfirmation;
