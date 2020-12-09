import React from 'react';
import css from './InputErrorMessage.scss';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';

type PropsType = {
    messageCode: string;
    name: string;
};

const InputErrorMessage: React.FC<PropsType> = ({ messageCode, name }: PropsType) => {
    const { t } = useTranslation('common');
    return (
        <div className={css.wrapper}>
            <Text variant="caption_00" color="ui-error">
                {messageCode === 'REQUIRED'
                    ? t(`common:errors.${messageCode}`)
                    : t(`common:errors.${messageCode}_${name}`)}
            </Text>
        </div>
    );
};

export default InputErrorMessage;
