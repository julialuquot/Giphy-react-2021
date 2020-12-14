import React from 'react';
import css from './CardPopUp.module.scss';
import { useTranslation } from '@i18n';

type CardPopupProps = { isOpen: boolean; active: boolean; onOpenModal: (boolean) => void };

const CardPopUp = ({ isOpen, active, onOpenModal }: CardPopupProps) => {
    const { t } = useTranslation('dashboard-partners');

    return (
        <div className={`${css.popup} ${isOpen && css.popup__open}`}>
            <span
                onClick={() => onOpenModal(true)}
                className={`${css.cta} ${active ? css.cta__error : css.cta__success}`}
            >
                <img src="/front-static/icons/suspend.svg" alt="suspend" />
                {active ? (
                    <p> {t('dashboard-partners:card.suspend-partner')}</p>
                ) : (
                    <p> {t('dashboard-partners:card.reactivate-partner')}</p>
                )}
            </span>

            <span className={`${css.cta} ${css.cta__edit}`}>
                <img src="/front-static/icons/edit.svg" alt="edit" />
                <p>{t('dashboard-partners:card.edit')}</p>
            </span>
        </div>
    );
};

export default CardPopUp;
