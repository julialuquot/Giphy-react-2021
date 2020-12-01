import React from 'react';
import css from './CardPopUp.module.scss';

type CardPopupProps = { isOpen: boolean; isActive: boolean };

const CardPopUp = ({ isOpen, isActive }: CardPopupProps) => {
    return (
        <div className={`${css.popup} ${isOpen && css.popup__open}`}>
            <span className={`${css.cta} ${isActive ? css.cta__success : css.cta__error}`}>
                <img src="/icons/suspend.svg" alt="suspend" />
                <p>Suspendre le partenaire</p>
            </span>
            <span className={`${css.cta} ${css.cta__edit}`}>
                <img src="/icons/edit.svg" alt="edit" />
                <p>Modifier</p>
            </span>
        </div>
    );
};

export default CardPopUp;
