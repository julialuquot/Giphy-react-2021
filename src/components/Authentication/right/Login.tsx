import React from 'react';
import css from '../Authentication.scss';
import { withTranslation } from '@i18n';
import Text from '@components/common/Text/Text';

type PropsType = {
    t: Function;
};
const Login: React.FC<PropsType> = ({ t }: PropsType) => {
    return (
        <div className={css.wrapper}>
            <img src="/images/logo.svg" alt="test image" />
            <div className={css.title}>
                <h4>{t('authentication:login.right.title_1')}</h4>
                <h4 className={css['text-brand-color']}>{t('authentication:login.right.title_2')} </h4>
            </div>
            <div className={css.description}>
                <Text variant="body_02">{t('authentication:login.right.description')} </Text>
            </div>
        </div>
    );
};

export default withTranslation('autthentication')(Login);
