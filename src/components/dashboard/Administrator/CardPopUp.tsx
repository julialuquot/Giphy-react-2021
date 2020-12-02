import React from 'react';
import css from './CardPopUp.module.scss';
import { useTranslation } from '@i18n';

type CardPopupProps = { isOpen: boolean; status: string };

const CardPopUp = ({ isOpen, status }: CardPopupProps) => {
    const { t } = useTranslation('dashboard-partners');

    return (
        <div className={`${css.popup} ${isOpen && css.popup__open}`}>
            <span className={`${css.cta} ${status !== 'inactive' ? css.cta__error : css.cta__success}`}>
                <img src="/icons/suspend.svg" alt="suspend" />
                {status !== 'inactive' ? (
                    <p> {t('dashboard-partners:card.suspend-partner')}</p>
                ) : (
                    <p> {t('dashboard-partners:card.reactivate-partner')}</p>
                )}
            </span>

            <span className={`${css.cta} ${css.cta__edit}`}>
                <img src="/icons/edit.svg" alt="edit" />
                <p>{t('dashboard-partners:card.edit')}</p>
            </span>
        </div>
    );
};

export default CardPopUp;
