import React from 'react';
import Text from '@components/common/Text/Text';
import css from '../Authentication.scss';
import { withTranslation } from '@i18n';
import AuthenticationCode from '@components/common/AuthenticationCode/AuthenticationCode';

type PropsType = {
    t: Function;
    phoneNumber: string;
};

const LoginConfirmation: React.FC<PropsType> = ({ t, phoneNumber }: PropsType) => {
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

export default withTranslation('authentication')(LoginConfirmation);
