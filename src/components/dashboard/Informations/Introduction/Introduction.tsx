import React, { useState } from 'react';
import css from './Introduction.module.scss';
import { useTranslation } from '@i18n';

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
            <p>{t('dashboard-informations:products.introduction.desc')}</p>
        </div>
    );
};

export default Introduction;
