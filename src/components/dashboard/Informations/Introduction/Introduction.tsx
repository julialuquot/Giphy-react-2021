import React, { useState } from 'react';
import css from './Introduction.module.scss';
import { useTranslation } from '@i18n';
import Text from '@components/common/Text/Text';

const Introduction = () => {
    const { t } = useTranslation('informations');

    const [isEditing, setIsEditing] = useState(false);

    const onEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className={css.introduction}>
            <span
                onClick={() => onEdit()}
                className={`${css.introduction__icon} ${isEditing && css.introduction__icon__editing}`}
            />
            <h5>{t('dashboard-informations:products.introduction.title')}</h5>
            <Text variant={'caption_01'} color={'ui-secondary'}>
                {t('dashboard-informations:products.introduction.desc')}
            </Text>
        </div>
    );
};

export default Introduction;
