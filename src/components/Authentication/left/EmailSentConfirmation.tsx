import React, { useState } from 'react';
import { useTranslation } from '@i18n';
import css from '../Authentication.scss';
import Text from '@components/common/Text/Text';
import Button from '@components/common/Button/Button';
import User from '@services/User';
import AuthenticationPageContext from '@components/Authentication/AuthenticationPageContext';

const EmailSentConfirmation: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation('authentication');
    const resendEmail = (email) => {
        setIsLoading(true);
        User.sendEmail({ email: email }).finally(() => setTimeout(() => setIsLoading(false), 1500));
    };
    return (
        <AuthenticationPageContext.Consumer>
            {({ email }) => (
                <div className={css['email-sent-confirmation']}>
                    <img src="/icons/checkmark.svg" alt="checkmark" />
                    <h3>{t('authentication:email-sent-confirmation.title')}</h3>
                    <br />
                    <Text tag="span" variant="body_02" color="ui-secondary">
                        {t('authentication:email-sent-confirmation.details')}{' '}
                        <Text tag="span" variant="body_02" color="ui-primary">
                            {email}
                        </Text>
                    </Text>
                    <div className={css.divider} />
                    <Button size="large" variant="tertiary" isLoading={isLoading} onClick={() => resendEmail(email)}>
                        {t('authentication:email-sent-confirmation.no-email-received')}
                    </Button>
                </div>
            )}
        </AuthenticationPageContext.Consumer>
    );
};

export default EmailSentConfirmation;
