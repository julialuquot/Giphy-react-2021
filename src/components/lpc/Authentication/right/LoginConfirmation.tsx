import React from 'react';
import css from '../Authentication.scss';
import Text from '@components/common/Text/Text';
import { useTranslation } from '@i18n';

const LoginConfirmation: React.FC = () => {
    const { t } = useTranslation('autthentication');
    return (
        <div className={css.wrapper}>
            <img src="/images/authentication/loginConfirmation/partner.jpg" alt="test image" />
            <div className={css.title}>
                <h4 className={css['text-brand-color']}>{t('authentication:login-confirmation.right.title_1')}</h4>
                <h4>{t('authentication:login-confirmation.right.title_2')} </h4>
            </div>
            <div className={css.description}>
                <Text variant="body_02">{t('authentication:login-confirmation.right.description')} </Text>
            </div>
        </div>
    );
};
export default LoginConfirmation;
