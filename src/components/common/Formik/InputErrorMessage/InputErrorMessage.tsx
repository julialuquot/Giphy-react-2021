import React from 'react';
import css from './InputErrorMessage.scss';
import { withTranslation } from '@i18n';
import Text from '@components/common/Text/Text';

type PropsType = {
    messageCode: string;
    t: Function;
    name: string;
};

const InputErrorMessage: React.FC<PropsType> = ({ messageCode, t, name }: PropsType) => {
    return (
        <div className={css.wrapper}>
            <Text variant="caption" color="ui-error">
                {messageCode === 'REQUIRED'
                    ? t(`common:errors.${messageCode}`)
                    : t(`common:errors.${messageCode}_${name}`)}
            </Text>
        </div>
    );
};

export default withTranslation('common')(InputErrorMessage);
