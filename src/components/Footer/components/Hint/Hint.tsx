import React from 'react';
import css from './Hint.module.scss';
import { withTranslation } from '@i18n';
import Text from '@components/common/Text/Text';

const namespacesRequired = ['footer'];

type HintProps = {
    t: (string) => string;
};

const Hint = ({ t }: HintProps) => {
    return (
        <div className={css.hint}>
            <Text variant={'hint'} color={'ui-secondary'}>
                {t('footer:hint')}
            </Text>
            <img src="/icons/logo-natixis.svg" alt={'natixis'} />
        </div>
    );
};

export default withTranslation(namespacesRequired)(Hint);
